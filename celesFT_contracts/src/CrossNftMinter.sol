// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {AxelarExecutable} from "./AxelarExecutable.sol";

contract CrossNftMinter is AxelarExecutable {
    mapping(address => mapping(uint => address)) crossNftOwners;

    // Supports all NFT Functions from  minting to transfering and buring
    function CrossNFT(
        string calldata destinationAddress,
        string calldata destinationDomain,
        address tokenAddress,
        uint tokenId,
        uint price,
        bytes memory tokenData
    ) external payable {
        if (crossNftOwners[tokenAddress][tokenId] == address(0)) {
            crossNftOwners[tokenAddress][tokenId] = msg.sender;
        } else {
            require(
                crossNftOwners[tokenAddress][tokenId] == msg.sender,
                "Not Owner"
            );
        }

        bytes memory payload = abi.encode(tokenAddress, tokenData, price);
        gasService.payNativeGasForContractCall{value: msg.value}(
            address(this),
            destinationDomain,
            destinationAddress,
            payload,
            msg.sender
        );

        gateway.callContract(destinationDomain, destinationAddress, payload);
    }

    function _execute(
        string calldata,
        string calldata,
        bytes calldata payload_
    ) internal override {
        (address token, bytes memory _calldata, uint price) = abi.decode(
            payload_,
            (address, bytes, uint)
        );
        (bool sucess, ) = token.call{value: price}(_calldata);
        require(sucess, "failed call");
    }

    receive() external payable {}
}
