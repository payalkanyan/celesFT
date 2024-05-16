// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {IAxelarGateway} from "../../node_modules/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IAxelarExecutable} from "../../node_modules/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarExecutable.sol";
import {IAxelarGasService} from "../../node_modules/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import {Initializable} from "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract AxelarExecutable is IAxelarExecutable, Initializable {
    IAxelarGateway public gateway;
    IAxelarGasService public gasService;

    function initialize(
        address gateway_,
        address gasReceiver_
    ) public initializer {
        gateway = IAxelarGateway(gateway_);
        gasService = IAxelarGasService(gasReceiver_);
    }

    function execute(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external {
        bytes32 payloadHash = keccak256(payload);

        if (
            !gateway.validateContractCall(
                commandId,
                sourceChain,
                sourceAddress,
                payloadHash
            )
        ) revert NotApprovedByGateway();

        _execute(sourceChain, sourceAddress, payload);
    }

function handle(
    uint32 _origin,
    bytes32 _sender,
    bytes calldata _data
) external payable virtual override {
    emit ReceivedMessage(_origin, _sender, msg.value, string(_data));
    lastSender = _sender;
    lastData = _data;
}

    function executeWithToken(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) external {
        bytes32 payloadHash = keccak256(payload);

        if (
            !gateway.validateContractCallAndMint(
                commandId,
                sourceChain,
                sourceAddress,
                payloadHash,
                tokenSymbol,
                amount
            )
        ) revert NotApprovedByGateway();

        _executeWithToken(
            sourceChain,
            sourceAddress,
            payload,
            tokenSymbol,
            amount
        );
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual {}

    function _executeWithToken(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal virtual {}
}
