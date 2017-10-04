var UPYUN = require('upyun');
var fs = require('fs');
var config = require('./config');
var upyun = new UPYUN(config.upyun.bucketName, config.upyun.username,config.upyun.password);
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
fs.readdir('./public/fm',function(err,data){
    if(err){
        console.error(err)
        return;
    }else{
        var results =data.filter((item)=>{
            if(item.indexOf('.mp3')>-1){
                return true;
            }else{
                return false
            }
        }).map(item=>{
            return Number(item.substring(0,item.indexOf('.mp3')))
        }).sort((a,b)=>{
            return a-b;
        })
        // console.log('resutl',results)
        var lastName = results.pop();
        var lastLocalPath = './public/fm/'+lastName+".mp3";
        var lastPath = `/podcast/${lastName}.mp3`
        console.log('start upload',lastLocalPath)
        upyun.uploadFile(lastPath, lastLocalPath, 'audio/mpeg', true,function(e,r){
            console.log(e,r);
            process.exit()
        });
    }
})


