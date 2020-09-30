const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

   if(date === null){
    return 'Unable to determine the time of year!';
  }
  //else if(date !== ){
  //  return 'Error';
 // }

  else {
    let month = date.getMonth();
    if(month === 3-5){
      return 'spring';
    }
    else if(month === 6-8){
      return 'summer';
    }
    else if(month === 9-11){
      return 'autumn (fall)';
    }
    else(month === 0 || month === 11-12){
      return 'winter';
    }

  }

  }

 
