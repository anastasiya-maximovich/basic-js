const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members === null){
    return false;
  }
  else{
    let newArray = members.filter(member => typeof(member) === 'string');
     
     return newArray = members.map(member => member.trim()[0].toLocaleUpperCase()).sort().join('');
     
  }
};
