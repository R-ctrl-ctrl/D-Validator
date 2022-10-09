const Validate = artifacts.require("Validate");

module.exports = function (deployer) {
  deployer.deploy(Validate);
};
