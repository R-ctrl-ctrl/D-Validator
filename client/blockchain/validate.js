const validateabi = [{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"generate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasharray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"isValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
const ValidateContract = web3 => {
    return new web3.eth.Contract(
        validateabi,
        "0x5187162B2e38E37b883Ab4827c0579e983591D0B"
    )
}

export default ValidateContract