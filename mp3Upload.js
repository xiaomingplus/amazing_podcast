var UPYUN = require('upyun');
var fs = require('fs');
var upyun = new UPYUN('scuinfo', 'dsgygb', 'www.scuweb.com');
var config = {
    baseUrl:"http://podcast.scuinfo.com"
};
//upyun.getUsage(function(err, result) {
//    //...
//
//    console.log(err,result);
//
//})

/**
 * podcast上传
 */


upyun.uploadFile('/podcast/39.mp3', './public/fm/39.mp3', 'audio/mpeg', true,function(e,r){
console.log(e,r);
});
