import { ethers } from "hardhat";
import utils from './utils'
import {Contract} from 'ethers'
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe('AccessController', function () {
    const password = 892397
    let controller: Contract
    let deployer: SignerWithAddress, user1: SignerWithAddress, user2: SignerWithAddress

    before(async () => {
        [deployer, user1, user2] = await ethers.getSigners()
        
        const factory = await ethers.getContractFactory("AccessController")
        controller = await factory.deploy(password)
    })

    it('owner', async () => {
        utils.assertEqual(await controller.owner(), deployer.address)
    })

    it('onlyOwner', async () => {
        await utils.assertRevertWithMsg(controller.connect(user1).setWhiteList(user1.address, true), "Ownable: caller is not the owner")
    })

    it('WhiteList', async () => {
        const beforeUserState = await controller.isWhiteList(user1.address)
        await controller.connect(deployer).setWhiteList(user1.address, true)
        const afterUserState = await controller.isWhiteList(user1.address)
        
        utils.assertEqual(beforeUserState, false)
        utils.assertEqual(afterUserState, true)
    })
    it('grantRole', async () => {
        const beforeUserState = await controller.isLevel1(user1.address)
        await controller.connect(deployer).grantLevel1(user1.address)
        const afterUserState = await controller.isLevel1(user1.address)
        
        utils.assertEqual(beforeUserState, false)
        utils.assertEqual(afterUserState, true)

        // level2 includes level1 permission
        await controller.connect(deployer).grantLevel2(user2.address)
        utils.assertEqual(await controller.isLevel1(user2.address), true)
        utils.assertEqual(await controller.isLevel2(user2.address), true)
    })

    it('revokeRole', async () => {
        await controller.connect(deployer).grantLevel1(user1.address)
        await controller.connect(deployer).grantLevel2(user2.address)

        utils.assertEqual(await controller.isLevel1(user1.address), true)
        utils.assertEqual(await controller.isLevel1(user2.address), true)
        utils.assertEqual(await controller.isLevel2(user2.address), true)

        await controller.connect(deployer).revokeLevel1(user1.address)
        await controller.connect(deployer).revokeLevel2(user2.address)

        utils.assertEqual(await controller.isLevel1(user1.address), false)
        utils.assertEqual(await controller.isLevel1(user2.address), false)
        utils.assertEqual(await controller.isLevel2(user2.address), false)
    })

    it('onlyRole', async () => {
        await controller.connect(deployer).grantLevel1(user1.address)
        await controller.connect(deployer).grantLevel2(user2.address)
        
        await utils.assertRevert(controller.connect(user1).getPassword())
        utils.assertEqual(await controller.connect(user2).getPassword(), password)
    })
});
