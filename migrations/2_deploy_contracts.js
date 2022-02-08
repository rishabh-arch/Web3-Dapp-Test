const Todo = artifacts.require("demo");

module.exports = function (deployer) {
  deployer.deploy(Todo);
};
