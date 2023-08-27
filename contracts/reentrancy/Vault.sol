//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

contract Vault is ReentrancyGuard {
    mapping(address => uint) balances;

    constructor () {}

    receive() external payable {}

    function depositETH() payable external {
        require(msg.value > 0, "deposit zero amount");
        
        uint amount = msg.value;
        balances[msg.sender] += amount;
    }

    function withdrawETH(uint amount) external nonReentrant {
        //check - effect - interaction
        require(balances[msg.sender] >= amount, "not enough balance"); //check
        
        
        
        // already checked in require
        unchecked {
            balances[msg.sender] -= amount; //effect
        }

        (bool success, ) = payable(msg.sender).call{value: amount}(new bytes(0));
    }
}