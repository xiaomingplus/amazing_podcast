var mp3Duration = require('mp3-duration');

mp3Duration('./public/fm/73.mp3').then(data=>{
    console.log('data',data);
})

