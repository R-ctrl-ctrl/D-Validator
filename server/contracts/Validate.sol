//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Validate{
    
    string[] public hasharray;


    function generate(string memory _hash) public {
        hasharray.push(_hash);
    }

    function isValid(string memory _hash) public view returns(bool) {
        for(uint i=0;i<hasharray.length;i++){
            if(keccak256(abi.encodePacked(_hash)) == keccak256(abi.encodePacked(hasharray[i]))){
                return true ;
            }
        }
        return false;
    }


}