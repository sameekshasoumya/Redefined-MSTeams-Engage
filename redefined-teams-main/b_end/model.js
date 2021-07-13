const redisUser = require("./redis");

exports.saveCallId = (key,value) => {
  return new Promise((resolve,reject)=> {
    redisUser.SET(key,JSON.stringify(value), "EX" , 86400, (err,res)=>{
      if(err){
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getCallId=(key)=>{
  return new Promise((resolve,reject) => {
    redisUser.GET(key, (err,res)=>{
      if(err){
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};