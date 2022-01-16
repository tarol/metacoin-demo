/*
 * @Author: taroljiang
 * @Date: 2022-01-16 16:17:45
 * @Description: 
 */

var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
};