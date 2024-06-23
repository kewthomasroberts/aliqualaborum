   const contractABI = compiledContract.abi;
   const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';

   const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
   