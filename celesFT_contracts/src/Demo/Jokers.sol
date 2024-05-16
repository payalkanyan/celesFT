// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Jokers is ERC721 {
    uint price = 1e15;

    constructor() ERC721("3jokers", "3JS") {}

    function safeMint(address to, uint256 tokenId) public payable {
        require(msg.value >= price, "price was low");
        _safeMint(to, tokenId);
    }

    receive() external payable {}
}

//0xd0a90ab9fd4908b51ee3c9d0ffbaa572786e0d93
