const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/b43caa47f2f14d1c91ca2dac46487f68"));
const address = "0x0F236903d24305282eC0AE325698929685400853";
const ABI = [{
    "inputs": [],
    "name": "getBalance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}];
console.log(web3.eth.getBalance) // проверяем
const myContract = new web3.eth.Contract(ABI, address)
myContract.methods.getBalance().call().then(console.log)
