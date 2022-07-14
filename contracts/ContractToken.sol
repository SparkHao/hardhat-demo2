// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Token {
    string public name = "My Token";
    string public symbol = "MTN";
    uint256 public totalSupply = 1000000;
    address public owner;
    mapping(address => uint) balances;

    constructor(){
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) external {
        console.log('Sender balance is %s.', balances[msg.sender]);
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns(uint) {
        return balances[account];
    }
}