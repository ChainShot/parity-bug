const { assert } = require("chai");
const { ethers } = require("hardhat");

const PARITY_WALLET_ADDRESS = "0xbec591de75b8699a3ba52f073428822d0bfc0d7e";

const funds = ethers.utils.parseEther("82189");

describe("Parity Multisig", () => {
  let contract, signer0, addr0;
  before(async () => {
    [addr0] = await ethers.provider.listAccounts();

    signer0 = await ethers.provider.getSigner(0);
    
    contract = await ethers.getContractAt("ParityWallet", PARITY_WALLET_ADDRESS);
  });

  it("should initially have code at the address", async () => {
    const code = await ethers.provider.getCode(contract.address);

    assert.notEqual(code, "0x");
  });

  describe("after taking ownership", () => {
    before(async () => {
      // TODO: take ownership! 
    });
    
    it("should have the address set as an owner", async () => {
      const isOwner = await contract.isOwner(addr0);
      
      assert(isOwner);
    });
    
    describe("after withdrawing the funds", () => {
      before(async () => {
        // TODO: move all funds
      });

      it("should increase the holdings", async function () {
        const balance = await ethers.provider.getBalance(addr0);

        assert(balance.gt(funds));
      });
    });
  });
});
