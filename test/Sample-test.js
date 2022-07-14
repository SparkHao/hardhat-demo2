const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("ContractToken", function () {
    let Token, token, owner, addr1, addr2
    beforeEach(async() => {
        Token = await ethers.getContractFactory("Token");
        token = await Token.deploy();
        [owner, addr1, addr2] = await ethers.getSigners();
    })

    describe("owner test", () => {
        it('owner pass', async() => {
            expect(await token.owner()).to.equal(owner.address);
        })

        it('deploy balance', async() => {
            const totalSupply = await token.totalSupply();
            expect(await token.balanceOf(owner.address)).to.equal(totalSupply);
        })
    })

    describe("transfer test", () => {
        it('transfer amount', async() => {
            await token.transfer(addr1.address, 100);
            const balAddr1 = await token.balanceOf(addr1.address);
            console.log(balAddr1);
            console.log(balAddr1 == 100);
            expect(balAddr1).to.equal(100);

            await token.connect(addr1).transfer(addr2.address, 50);
            const balAddr1_1 = await token.balanceOf(addr1.address);
            console.log(balAddr1_1);
            expect(balAddr1_1).to.equal(50);
        })


    })
  });
  