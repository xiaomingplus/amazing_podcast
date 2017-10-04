var UPYUN = require('upyun');
var fs = require('fs');
var config = require('./config');
var upyun = new UPYUN(config.upyun.bucketName, config.upyun.username,config.upyun.password);
//upyun.getUsage(function(err, result) {
//    //...
//
//    console.log(err,result);
//
//})

/**
 * podcast上传
 */
upyun.uploadFile('/images/wechatPay.png', './public/images/wechatPay.png', 'image/png', true,function(e,r){
console.log(e,r);
});