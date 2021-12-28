# Parity Hack

Let's re-create the [parity wallet hack](https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7/) by forking Ethereum before the hacker took the funds.

## Setup

Create a `.env` file with a `MAINNET_URL` set to an [alchemy](https://www.alchemy.com/) mainnet URL. 

## Execution

Take a look at the tests in `test/test.js`. You'll want to complete the two TODOs:

1. For the first TODO, replicate taking control of the logic contract ([tx 0x9dbf03...](https://etherscan.io/tx/0x9dbf0326a03a2a3719c27be4fa69aacc9857fd231a8d9dcaede4bb083def75ec))
2. For the second TODO, replicate withdrawing the funds ([tx 0xeef10f...](https://etherscan.io/tx/0xeef10fc5170f669b86c4cd0444882a96087221325f8bf2f55d6188633aa7be7c))

Once you have completed these two TODOs you should be able to run the tests (`npx hardhat test`) and see all three test cases passing.