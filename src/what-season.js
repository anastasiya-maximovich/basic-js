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
    if(month >= 2 && month <= 4){
      return 'spring';
    }
    else if(month >= 5 && month <= 7){
      return 'summer';
    }
    else if(month >= 8 && month <= 10){
      return 'autumn (fall)';
    }
    else(month >= 1 || month === 11)
      return 'winter';
  }

  }

 
