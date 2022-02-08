var contract = null
const mnemonicPhrase =
'victory cancel exotic shell dawn visual memory patch liberty risk zoo shadow'
const url = `https://polygon-mumbai.g.alchemy.com/v2/aOmRmj5r9XdoNFvg3TadYtKoRYN9DBeJ`
var ADDRESS = '0x60368Af5FFfAb2668F860DBf78DC5cbD3B4762c7'
var ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'getName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
(async () => {
  const HDWalletProvider = require('@truffle/hdwallet-provider')
  const Web3 = require('web3')
  
  const provider = new HDWalletProvider(mnemonicPhrase, url)

  const web3 = new Web3(provider)

  var accounts = await web3.eth.getAccounts()
  account = accounts[0]
  // console.log(contract.method)
  // }
  document.getElementById('wallet-address').textContent = account
  console.log('Try 13')
  contract = new web3.eth.Contract(ABI, ADDRESS)

 


    document.getElementById('ClickMe').onclick = ()=>{
      contract.methods
      .setName(document.getElementById('getText').value)
      .send({ from: '0x54c860C59DdF1960FE526201A90E0fD62f4a5eB5' })
      // .then(r=>console.log)
      // setInterval(2000)
    }

    document.getElementById('ClickMe_result').onclick = ()=>{
      document.getElementById('loading').innerText = "loading....";
      contract.methods
      .getName()
      .call()
      .then((r) => {
      document.getElementById('loading').innerText = "Here we go";
        
        document.getElementById("wallet-result").innerText = r;

      }
      
      )
     
      // setInterval(2000)
    }


  })()
  
  
  