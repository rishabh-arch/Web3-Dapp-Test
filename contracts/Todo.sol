// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract demo {
    string private name;

    constructor() {
        name = "some";
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory _name) public returns(string memory){
        name = _name;
        return "DONE";
    }
}
