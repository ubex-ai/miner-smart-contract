var UbexContract = artifacts.require("./UbexContract.sol");
module.exports = function(deployer) {
	deployer.deploy( UbexContract );
};
