// SPDX-License-Identifier: MIT
// Further information: https://eips.ethereum.org/EIPS/eip-1014
pragma solidity ^0.8.9;

import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
contract Creste2Deployer{
/**
    function computeAddress(
        bytes32 salt,
        bytes32 codeHash
    ) public view returns (address) {
        return Create2.computeAddress(salt, codeHash);
    }

    /**
     * @dev Returns the address where a contract will be stored if deployed via {deploy} from a
     * contract located at `deployer`. If `deployer` is this contract's address, returns the
     * same value as {computeAddress}.
     */
    function computeAddressWithDeployer(
        bytes32 salt,
        bytes32 codeHash,
        address deployer
    ) public pure returns (address) {
        return Create2.computeAddress(salt, codeHash, deployer);
    }

    /**
     * @dev Contract can receive ether. However, the only way to transfer this ether is
     * to call the function `killCreate2Deployer`.
     */
    receive() external payable {}
}
