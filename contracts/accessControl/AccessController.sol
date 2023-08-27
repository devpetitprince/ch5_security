//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract AccessController is Ownable, AccessControl {
    // Role-based
    bytes32 public constant ACCESS_LEVEL_1 = keccak256(abi.encodePacked("ACCESS_LEVEL_1"));
    bytes32 public constant ACCESS_LEVEL_2 = keccak256(abi.encodePacked("ACCESS_LEVEL_2"));

    // White list
    mapping(address => bool) whiteList;

    // Secret
    uint private immutable PASSWORD;

    constructor (uint _password) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        
        PASSWORD = _password;
    }
    
    // VIEW
    function isWhiteList(address account) external view returns (bool) {
        return whiteList[account];
    }

    function isLevel1(address account) external view returns (bool) {
        return hasRole(ACCESS_LEVEL_1, account);
    }

    function isLevel2(address account) external view returns (bool) {
        return hasRole(ACCESS_LEVEL_2, account);
    }

    function getPassword() external view onlyRole(ACCESS_LEVEL_2) returns (uint) {
        return PASSWORD;
    }

    // RESTRICTED
    function setWhiteList(address account, bool state) external onlyOwner {
        whiteList[account] = state;
    }

    function grantLevel1(address account) external onlyOwner {
        grantRole(ACCESS_LEVEL_1, account);
    }

    function grantLevel2(address account) external onlyOwner {
        grantRole(ACCESS_LEVEL_1, account);
        grantRole(ACCESS_LEVEL_2, account);
    }

    function revokeLevel1(address account) external onlyOwner {
        revokeRole(ACCESS_LEVEL_1, account);
    }

    function revokeLevel2(address account) external onlyOwner {
        revokeRole(ACCESS_LEVEL_1, account);
        revokeRole(ACCESS_LEVEL_2, account);
    }
}