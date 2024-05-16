// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "../src/Demo/Jokers.sol";
// import "../src/AxelarExecutable.sol";
// import "../src/Create2Deployer.sol";
// import "../src/CrossNftMinter.sol";


contract JokersScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("L2_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Jokers jokers = new Jokers();

        vm.stopBroadcast();
    }
}
