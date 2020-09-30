const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

   if(!date){
    return 'Unable to determine the time of year!';
  }
  else if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw Error;
  }// этот кусок честно списала
  //мой вариант был if(date !== Date), как-то так

  else {
    let month = date.getMonth();
    if(month >= 3 && month <= 5){
      return 'spring';
    }
    else if(month >= 6 && month <= 8){
      return 'summer';
    }
    else if(month >= 9 && month <= 11){
      return 'autumn (fall)';
    }
    else(month >= 0 || month <= 2)
      return 'winter';
  }

  }

 
