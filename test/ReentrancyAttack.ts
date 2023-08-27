import { ethers } from "hardhat";
import utils from './utils'
import {Contract} from 'ethers'
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const fromEther = utils.fromEther
const toEther = utils.toEther

describe('ReentrancyAttack', function () {
    let vault: Contract
    let attacker: SignerWithAddress, user1: SignerWithAddress, user2: SignerWithAddress, user3: SignerWithAddress

    before(async () => {
        [attacker, user1, user2, user3] = await ethers.getSigners()
        
        const Vault = await ethers.getContractFactory("Vault")
        vault = await Vault.deploy()
        
        // Deposit 3 users
        await vault.connect(user1).depositETH({value: toEther(100)})
        await vault.connect(user2).depositETH({value: toEther(200)})
        await vault.connect(user3).depositETH({value: toEther(300)})
        console.log(`total vault locked ETH: ${fromEther(await ethers.provider.getBalance(vault.address))}`)
    })

    it('attack', async () => {
        //////////////////////////////////////////////////////////////////////////////////////
        // TODO: Withdraw all of depoist
        const Attack = await ethers.getContractFactory("Attacker")
        const attack = await Attack.deploy(vault.address)
        await attack.attack({value: toEther(10)})
        //////////////////////////////////////////////////////////////////////////////////////
        
        console.log(`total vault locked ETH: ${fromEther(await ethers.provider.getBalance(vault.address))}`)
        utils.assertEqual(await ethers.provider.getBalance(vault.address), toEther(0))
        console.log("[Exploit Vault] success")
    })
});
