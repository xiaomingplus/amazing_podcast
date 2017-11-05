var Podcast = require('podcast');
var UPYUN = require('upyun');
var fs = require('fs');
var config = require('./config')
var upyun = new UPYUN(config.upyun.bucketName, config.upyun.username,config.upyun.password);
var config = {
    baseUrl:"http://static.scuinfo.com/podcast",
    picUrl:"http://static.scuinfo.com/logo",
    siteUrl:"http://podcast.scuinfo.com",
    url:"http://static.scuinfo.com/podcast"
};

/* lets create an rss feed */

var feed = new Podcast({
    title: '神奇海螺',
    description: '「神奇海螺」是来自四川大学的脱口秀电台节目，每周日更新。scuinfo和零壹广播剧社出品。',
    feed_url: config.url+'/rss.xml',
    site_url: config.siteUrl,
    image_url: config.picUrl+'/fmIcon.png',
    docs: config.siteUrl+'/docs.html',
    managingEditor: 'scuweb@gmail.com (scuinfo)',
    webMaster: 'scuweb@gmail.com (scuinfo)',
    copyright: '2017 scuinfo',
    language: 'zh-CN',
    itunesCategory: 'Comedy',

    ttl: '60',
    itunesAuthor: '来自四川大学的脱口秀电台节目，每周五更新。scuinfo和零壹广播剧社出品',

    itunesSubtitle: '你为什么不去问问神奇海螺呢？',
    itunesSummary: '「神奇海螺」是来自四川大学的脱口秀电台节目，每周五更新。scuinfo和零壹广播剧社出品。',
    itunesOwner: { name: 'scuinfo', email:'scuweb@gmail.com' },
    itunesExplicit: false,
    itunesImage: config.picUrl+'/fmLogo1400.jpg'
});

/* loop over data and add to feed */
feed.item({
    title:  '为什么不去问问川大的神奇海螺呢？',
    description: '为什么不去问问神奇的海螺呢？',
    url: config.baseUrl+'/1.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 23, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/1.mp3', file:'./public/fm/1.mp3'}, // optional enclosure
    itunesSubtitle: '为什么不去问问神奇的海螺呢?',
    itunesSummary: '为什么不去问问神奇的海螺呢?',
    itunesDuration: 651,
    itunesKeywords: ['crazy conch','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '爱上一个学渣，心疼。',
    description: '今天又去上你的课，可是你又没来。',
    url: config.baseUrl+'/2.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 24, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/2.mp3', file:'./public/fm/2.mp3'}, // optional enclosure
    itunesSubtitle: '爱上一个学渣，心疼。',
    itunesSummary: '今天又去上你的课，可是你又没来。?',
    itunesDuration: 984,
    itunesKeywords: ['crazy conch','神奇海螺','四川大学','川大']
});
feed.item({
    title:  '川大体育学院网站的数学是体育老师教的吗？',
    description: '5+2不等于7等于几？',
    url: config.baseUrl+'/3.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 25, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/3.mp3', file:'./public/fm/3.mp3'}, // optional enclosure

    itunesSubtitle: '川大体育学院网站的数学是体育老师教的吗?',
    itunesSummary: 'rap歌词：由于网页中frontend和backend书写不严密session生成:算法不健壮导致verify code超时但view并没有被notify去refresh导致页面上的验证码expire用户正常submit后input在program内部进行match但由于verify code已经expire所以algorithm返回false导致原来的SQL query被denie进而出现cache被强行clear后输出error信息.',
    itunesDuration: 976,
    itunesKeywords: ['crazy conch','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '鸟鸣川大',
    description: '成都某高校校园大型真人选秀活动。',
    url: config.baseUrl+'/4.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 28, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/4.mp3', file:'./public/fm/4.mp3'}, // optional enclosure

    itunesSubtitle: '鸟鸣川大',
    itunesSummary: '成都某高校校园大型真人选秀活动。',
    itunesDuration: 1176,
    itunesKeywords: ['鸟鸣川大','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '教官还是个孩子，请放过他。',
    description: '女孩纸请勿穿的太清凉，男孩纸请勿捡肥皂。',
    url: config.baseUrl+'/5.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Jun 5, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/5.mp3', file:'./public/fm/5.mp3'}, // optional enclosure

    itunesSubtitle: '教官还是个孩子，请放过他。',
    itunesSummary: '女孩纸请勿穿的太清凉，男孩纸请勿捡肥皂。',
    itunesDuration: 1544,
    itunesKeywords: ['军训','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '川大四俗',
    description: '权威是如何定义川大四俗的？本期节目你将会听到以下事件以及各种5毛钱特效：第一次读川大，怎样才能装作经常读的样子？川大四俗都有哪些？如何看待泸州医学院改名风波?没有了商业街，我该如何生存？寝室通了热水，然后呢？不高山上到底发生了什么？单身狗在川大会受到哪些伤害？',
    url: config.baseUrl+'/6.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Aug 10, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/6.mp3', file:'./public/fm/6.mp3'}, // optional enclosure
    itunesSubtitle: '川大四俗',
    itunesSummary: '权威是如何定义川大四俗的？本期节目你将会听到以下事件以及各种5毛钱特效：第一次读川大，怎样才能装作经常读的样子？川大四俗都有哪些？如何看待泸州医学院改名风波?没有了商业街，我该如何生存？寝室通了热水，然后呢？不高山上到底发生了什么？单身狗在川大会受到哪些伤害？',
    itunesDuration: 922,
    itunesKeywords: ['川大四俗','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '城郊的荷尔蒙与生活#神奇海螺第二季vol.1',
    description: '“年轻男孩什么都没有，但是他们能在床上干一天。”——前者描述了川大城郊的年轻男孩如今面临的处境？',
    url: config.baseUrl+'/7.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Sep 20, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/7.mp3', file:'./public/fm/7.mp3'}, // optional enclosure
    itunesSubtitle: '城郊的荷尔蒙与生活#神奇海螺第二季vol.1',
    itunesSummary: '“年轻男孩什么都没有，但是他们能在床上干一天。”——前者描述了川大城郊的年轻男孩如今面临的处境',
    itunesDuration: 933,
    itunesKeywords: ['荷尔蒙','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '我招新我有理，你只要记住，我叫叶良辰#神奇海螺第二季vol.2',
    description: '你若是感觉有实力和我玩，良辰不介意奉陪到底，别让我去你们那个破青广找你，我是本地的，我可以有一百种方式让你呆不下去，可你，无可奈何。',
    url: config.baseUrl+'/8.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Sep 26, 2015', // any format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/8.mp3', file:'./public/fm/8.mp3'}, // optional enclosure
    itunesSubtitle: '我招新我有理，你只要记住，我叫叶良辰#神奇海螺第二季vol.2',
    itunesSummary: '你若是感觉有实力和我玩，良辰不介意奉陪到底，别让我去你们那个破青广找你，我是本地的，我可以有一百种方式让你呆不下去，可你，无可奈何。',
    itunesDuration: 1016,
    itunesKeywords: ['招新','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '距离今年川大的光棍节就剩一个月了？#神奇海螺第二季vol.3',
    description: '本期看点：1.谁救救我们的网络？2.和男票出去旅游是住一起还是一起住？3.你永远不知道的商业街创业真相4.人家上大学发月饼，你tm在秀恩爱？5.走，去望江和学姐抢学长6.川大的保研路7.川大的风水史8.距离今年的光棍节就剩一个月了?',
    url: config.baseUrl+'/9.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 10, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/9.mp3', file:'./public/fm/9.mp3'}, // optional enclosure
    itunesSubtitle: '距离今年川大的光棍节就剩一个月了？#神奇海螺第二季vol.3',
    itunesSummary: '本期看点：1.谁救救我们的网络？2.和男票出去旅游是住一起还是一起住？3.你永远不知道的商业街创业真相4.人家上大学发月饼，你tm在秀恩爱？5.走，去望江和学姐抢学长6.川大的保研路7.川大的风水史8.距离今年的光棍节就剩一个月了?',
    itunesDuration: 969,
    itunesKeywords: ['光棍节','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '虽然虽然很爱你，却要阉了你#神奇海螺第二季Vol.4',
    description: '本期看点：1.没有了青广的歌声，你的大学还完整吗2.我的大学被青广的歌声上了3.这取快递的场面，如你所愿4.如此悬殊的电信收费，合理吗？5.没有商业街的川大学生，今晚吃啥？6.虽然虽然很爱你，却要阉了你',
    url: config.baseUrl+'/10.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 18, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/10.mp3', file:'./public/fm/10.mp3'}, // optional enclosure
    itunesSubtitle: '虽然虽然很爱你，却要阉了你#神奇海螺第二季Vol.4',
    itunesSummary: '本期看点：1.没有了青广的歌声，你的大学还完整吗2.我的大学被青广的歌声上了3.这取快递的场面，如你所愿4.如此悬殊的电信收费，合理吗？5.没有商业街的川大学生，今晚吃啥？6.虽然虽然很爱你，却要阉了你',
    itunesDuration: 1216,
    itunesKeywords: ['阉了你','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '后江安时代#神奇海螺第二季Vol.5',
    description: '「中国第一所985驾校的商业街申遗正式启动」',
    url: config.baseUrl+'/11.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 25, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/11.mp3', file:'./public/fm/11.mp3'}, // optional enclosure
    itunesSubtitle: '后江安时代#神奇海螺第二季Vol.5',
    itunesSummary: '「中国第一所985驾校的商业街申遗正式启动」',
    itunesDuration: 1158,
    itunesKeywords: ['后江安时代','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '那个冷成傻逼的白衬衫#神奇海螺第二季Vol.6',
    description: '那个冷成傻逼的白衬衫',
    url: config.baseUrl+'/12.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 31, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/12.mp3', file:'./public/fm/12.mp3'}, // optional enclosure
    itunesSubtitle: '那个冷成傻逼的白衬衫#神奇海螺第二季Vol.6',
    itunesSummary: '那个冷成傻逼的白衬衫',
    itunesDuration: 1091,
    itunesKeywords: ['那个冷成傻逼的白衬衫','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '为什么你在川大的女生节里一无所获?#神奇海螺第二季Vol.7',
    description: '川大女生节全方位解密',
    url: config.baseUrl+'/13.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 7, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/13.mp3', file:'./public/fm/13.mp3'}, // optional enclosure
    itunesSubtitle: '为什么你在川大的女生节里一无所获？#神奇海螺第二季Vol.7',
    itunesSummary: '川大女生节全方位解密',
    itunesDuration: 1240,
    itunesKeywords: ['川大女生节','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '一个人更容易在餐厅找到位置#神奇海螺第二季Vol.8',
    description: '单身的真谛——“或许应该感到幸运，一个人，更容易在餐厅找到合适的位置”。',
    url: config.baseUrl+'/14.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 21, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/14.mp3', file:'./public/fm/14.mp3'}, // optional enclosure
    itunesSubtitle: '一个人更容易在餐厅找到位置#神奇海螺第二季Vol.8',
    itunesSummary: '单身的真谛——“或许应该感到幸运，一个人，更容易在餐厅找到合适的位置”。',
    itunesDuration: 1543,
    itunesKeywords: ['一个人','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '馨苑北方水饺&钟水饺撕逼大战#神奇海螺第二季Vol.9',
    description: '你支持谁?',
    url: config.baseUrl+'/15.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 28, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/15.mp3', file:'./public/fm/15.mp3'}, // optional enclosure
    itunesSubtitle: '馨苑北方水饺&钟水饺撕逼大战#神奇海螺第二季Vol.9',
    itunesSummary: '你支持谁?',
    itunesDuration: 1046,
    itunesKeywords: ['撕逼','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '众情侣践踏狗权，强行调情自习间#神奇海螺第二季Vol.10',
    description: `神奇海螺发展停滞竟致招新地步？
校方迟迟不肯放出考表竟为哪般？
wuli川大教室申请揭秘
scu学子为何苦苦哀求相亲？
川大重修或要真收费？
图书馆某男生，你建设社会主义的样子成功的引起了我的注意
女生专用洗衣机突现川大洗衣房
川大某宿舍惊现充电费
众情侣践踏狗权，强行调情自习间
又到了期末占座的季节了`,
    url: config.baseUrl+'/16.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 5, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/16.mp3', file:'./public/fm/16.mp3'}, // optional enclosure
    itunesSubtitle: '众情侣践踏狗权，强行调情自习间#神奇海螺第二季Vol.10',
    itunesSummary: `神奇海螺发展停滞竟致招新地步？
校方迟迟不肯放出考表竟为哪般？
wuli川大教室申请揭秘
scu学子为何苦苦哀求相亲？
川大重修或要真收费？
图书馆某男生，你建设社会主义的样子成功的引起了我的注意
女生专用洗衣机突现川大洗衣房
川大某宿舍惊现充电费
众情侣践踏狗权，强行调情自习间
又到了期末占座的季节了`,
    itunesDuration: 1055,
    itunesKeywords: ['情侣','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '我校学子没有性生活吗？#神奇海螺第二季Vol.11',
    description: `没有性生活的我校学子为何被人吐槽？村头单车为何离奇被盗？异地恋为何频频被绿？考试成绩为何屡遭辅导员群发？银行卡里突然出现的劳务费究竟是何人所为？川大各角落隐藏的变态男究竟是人是鬼？围合门禁人脸识别影响玻尿酸销量的背后究竟隐藏着什么？`,
    url: config.baseUrl+'/17.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 12, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/17.mp3', file:'./public/fm/17.mp3'}, // optional enclosure
    itunesSubtitle: '我校学子没有性生活吗？#神奇海螺第二季Vol.11',
    itunesSummary: `没有性生活的我校学子为何被人吐槽？村头单车为何离奇被盗？异地恋为何频频被绿？考试成绩为何屡遭辅导员群发？银行卡里突然出现的劳务费究竟是何人所为？川大各角落隐藏的变态男究竟是人是鬼？围合门禁人脸识别影响玻尿酸销量的背后究竟隐藏着什么？`,
    itunesDuration: 1161,
    itunesKeywords: ['性生活','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '学长送学弟归寝却怦然心动#神奇海螺第二季Vol.12',
    description: `学长送学弟归寝为何怦然心动？当众表白为何引来众多保安？scunet为何只对广东地域歧视？火车站被盗的手机究竟是何人所为？现场嘿嘿嘿的笑笑相声社演员究竟是谁？围合门口当中虐狗的背后究竟隐藏着什么？`,
    url: config.baseUrl+'/18.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 19, 2015', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/18.mp3', file:'./public/fm/18.mp3'}, // optional enclosure
    itunesSubtitle: '学长送学弟归寝却怦然心动#神奇海螺第二季Vol.12',
    itunesSummary: `学长送学弟归寝为何怦然心动？当众表白为何引来众多保安？scunet为何只对广东地域歧视？火车站被盗的手机究竟是何人所为？现场嘿嘿嘿的笑笑相声社演员究竟是谁？围合门口当中虐狗的背后究竟隐藏着什么？`,
    itunesDuration: 1749,
    itunesKeywords: ['学长学弟','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '长得丑难道就不配拥有爱情？#神奇海螺寒假特辑',
    description: `本期你将听到以下内容：
我校学子喜迎情人节
我校家长喜迎成绩单
长得丑到底配不配拥有爱情？
男朋友打游戏不陪我聊天这正常吗？
独家解密川大转专业
我校医学生人到中年为何仍死守神奇海螺？
神奇海螺制作组终极秘密
神奇海螺男神大揭秘`,
    url: config.baseUrl+'/19.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Feb 19, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/19.mp3', file:'./public/fm/19.mp3'}, // optional enclosure
    itunesSubtitle: '长得丑难道就不配拥有爱情？#神奇海螺寒假特辑',
    itunesSummary: `本期你将听到以下内容：
我校学子喜迎情人节
我校家长喜迎成绩单
长得丑到底配不配拥有爱情？
男朋友打游戏不陪我聊天这正常吗？
独家解密川大转专业
我校医学生人到中年为何仍死守神奇海螺？
神奇海螺制作组终极秘密
神奇海螺男神大揭秘`,
    itunesDuration: 1344,
    itunesKeywords: ['丑','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '《性健康与行为》这门小课 ？神奇海螺第三季Vol.1',
    description: `本期你将听到以下内容：
《走进科学之江安自行车指南》
川内著名学府小白鼠因施工噪音而流产
望江基教惊现露阴癖
在保洁阿姨面前亲热是怎样的一种体验
教室里吃早餐有错吗？
八年华西六年军训
《性行为与健康》这门小课

让我们感谢本期辛苦的幕后英雄：
台长：梓昔
台本策划：台本组全体（）
台本主体：巨琳，阿芽
op：阿睡，曜么得
留言互动：软盘，月半
后期：关北居士`,
    url: config.baseUrl+'/20.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Mar 19, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/20.mp3', file:'./public/fm/20.mp3'}, // optional enclosure
    itunesSubtitle: '《性健康与行为》这门小课 ？神奇海螺第三季Vol.1',
    itunesSummary: `本期你将听到以下内容：
《走进科学之江安自行车指南》
川内著名学府小白鼠因施工噪音而流产
望江基教惊现露阴癖
在保洁阿姨面前亲热是怎样的一种体验
教室里吃早餐有错吗？
八年华西六年军训
《性行为与健康》这门小课

让我们感谢本期辛苦的幕后英雄：
台长：梓昔
台本策划：台本组全体（）
台本主体：巨琳，阿芽
op：阿睡，曜么得
留言互动：软盘，月半
后期：关北居士`,
    itunesDuration: 1050,
    itunesKeywords: ['性行为','神奇海螺','四川大学','川大']
});




feed.item({
    title:  '新旧商业街只是有无公众号的差别吗？',
    description: `欢迎收听神奇海螺第三季第2期,本期你将听到以下内容:
新旧商业街只是有无公众号的差别吗？
在二餐浏览男生的脸所引发的事件
围合外等女友却被嘲笑为外卖男的时候，他在想什么？
化妆2小时却被通知取消约会的时候，她在想什么？
川大自行车防偷终极指南
在川大，腿短怎么办？
神奇海螺主播首度公开回应节目是标题党的问题
围合里发霉的衣服究竟是什么引起的？
在发出「今天我吃药的时候看到一条新闻」之后...
江安商业街某理发店被爆出店大欺客
我川校车变身别人家的校车，竟然可以出游&在线选座了！

感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得
后期:软盘
`,
    url: config.baseUrl+'/21.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Mar 26, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/21.mp3', file:'./public/fm/21.mp3'}, // optional enclosure
    itunesSubtitle: '新旧商业街只是有无公众号的差别吗？',
    itunesSummary: `欢迎收听神奇海螺第三季第2期,本期你将听到以下内容:
新旧商业街只是有无公众号的差别吗？
在二餐浏览男生的脸所引发的事件
围合外等女友却被嘲笑为外卖男的时候，他在想什么？
化妆2小时却被通知取消约会的时候，她在想什么？
川大自行车防偷终极指南
在川大，腿短怎么办？
神奇海螺主播首度公开回应节目是标题党的问题
围合里发霉的衣服究竟是什么引起的？
在发出「今天我吃药的时候看到一条新闻」之后...
江安商业街某理发店被爆出店大欺客
我川校车变身别人家的校车，竟然可以出游&在线选座了！

感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得
后期:软盘`,
    itunesDuration: 881,
    itunesKeywords: ['商业街','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '多一点套路,少一点真诚',
    description: `欢迎收听神奇海螺第三季第3期,本期你将听到以下内容:
川大学生除了看脸还会看哪？
食堂排队时吃东西有伤风化吗？
一群需要领养的单身狗
"算来算去你都是最不得宠的那个"
宋仲基不来川大的真正原因？
如何看待江安校医院让我多喝热水？
校园卡存钱失败怎么办？
跳进臭臭的明远湖是为了什么？
多一点套路少一点真诚


感谢神奇海螺团队的幕后人员:
台本:芽芽，巨巨
后期:软盘
`,
    url: config.baseUrl+'/22.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 2, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/22.mp3', file:'./public/fm/22.mp3'}, // optional enclosure
    itunesSubtitle: '多一点套路,少一点真诚',
    itunesSummary: `欢迎收听神奇海螺第三季第3期,本期你将听到以下内容:
川大学生除了看脸还会看哪？
食堂排队时吃东西有伤风化吗？
一群需要领养的单身狗
"算来算去你都是最不得宠的那个"
宋仲基不来川大的真正原因？
如何看待江安校医院让我多喝热水？
校园卡存钱失败怎么办？
跳进臭臭的明远湖是为了什么？
多一点套路少一点真诚

感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得
后期:软盘`,
    itunesDuration: 1138,
    itunesKeywords: ['撩妹','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '单身狗要不要吃狗粮？',
    description: `欢迎收听神奇海螺第三季第4期,本期你将听到以下内容:
单身狗要不要吃狗粮？
独家解密川大「四四惨案」事件
我校184的男生配多高的女生？
图书馆前停的自行车要不要全部捐出去？
想不想尝尝中快的菠萝炒肉？
神奇海螺竟被赞扬客观中立？？？
川藏铁路通车后成都到拉萨只要13个小时

感谢神奇海螺团队的幕后人员:
台本:曜么得 阿睡
后期:软盘
`,
    url: config.baseUrl+'/23.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 9, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/23.mp3', file:'./public/fm/23.mp3'}, // optional enclosure
    itunesSubtitle: '单身狗要不要吃狗粮？',
    itunesSummary: `欢迎收听神奇海螺第三季第4期,本期你将听到以下内容:
单身狗要不要吃狗粮？
独家解密川大「四四惨案」事件
我校184的男生配多高的女生？
图书馆前停的自行车要不要全部捐出去？
想不想尝尝中快的菠萝炒肉？
神奇海螺竟被赞扬客观中立？？？
川藏铁路通车后成都到拉萨只要13个小时

感谢神奇海螺团队的幕后人员:
台本:曜么得 阿睡
后期:软盘`,
    itunesDuration: 1105,
    itunesKeywords: ['单身狗','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '澡堂歌者',
    description: `欢迎收听神奇海螺第三季第5期,本期你将听到以下内容:

澡堂灵魂歌手见闻
川大学生遇到「和颐酒店」类事件该如何应对？
收到前男友寄来的东西该怎么处理？
川大英语竞赛考场，听力开始试卷仍未发
川大某寝室竟在厕所杀鱼
快毕业了，余额宝还有3万块，该怎么花？
神奇海螺主播爱上谷歌娘
寝室厕所通了热水后竟至墙壁生菌

感谢神奇海螺团队的幕后人员:
台本:巨琳，阿芽
后期:软盘
`,
    url: config.baseUrl+'/24.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 16, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/24.mp3', file:'./public/fm/24.mp3'}, // optional enclosure
    itunesSubtitle: '澡堂歌者',
    itunesSummary: `欢迎收听神奇海螺第三季第5期,本期你将听到以下内容:

澡堂灵魂歌手见闻
川大学生遇到「和颐酒店」类事件该如何应对？
收到前男友寄来的东西该怎么处理？
川大英语竞赛考场，听力开始试卷仍未发
川大某寝室竟在厕所杀鱼
快毕业了，余额宝还有3万块，该怎么花？
神奇海螺主播爱上谷歌娘
寝室厕所通了热水后竟至墙壁生菌

感谢神奇海螺团队的幕后人员:
台本:巨琳，阿芽
后期:软盘`,
    itunesDuration: 1228,
    itunesKeywords: ['澡堂歌者','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '如何看待男票不愿在朋友圈公布恋情？',
    description: `欢迎收听神奇海螺第三季第6期,本期你将听到以下内容:

如何看待男票不愿在朋友圈公布恋情？
江安的圈存机都是腊鸡吗？
校园失窃竟因为撩妹？
江安周边最好吃的冒菜是？
呼吁川大食堂尽快实行饭菜变质的赔偿方案
神奇海螺从台本到后期全揭秘

感谢神奇海螺团队的幕后人员:
台本:曜么得 阿睡
后期:软盘
`,
    url: config.baseUrl+'/25.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 23, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/25.mp3', file:'./public/fm/25.mp3'}, // optional enclosure
    itunesSubtitle: '如何看待男票不愿在朋友圈公布恋情？',
    itunesSummary: `欢迎收听神奇海螺第三季第6期,本期你将听到以下内容:

如何看待男票不愿在朋友圈公布恋情？
江安的圈存机都是腊鸡吗？
校园失窃竟因为撩妹？
江安周边最好吃的冒菜是？
呼吁川大食堂尽快实行饭菜变质的赔偿方案
神奇海螺从台本到后期全揭秘

感谢神奇海螺团队的幕后人员:
台本:曜么得 阿睡
后期:软盘`,
    itunesDuration: 1128,
    itunesKeywords: ['男朋友','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '频繁的校庆会是一种恶性循环吗？',
    description: `欢迎收听神奇海螺第三季第7期,本期你将听到以下内容:

    频繁的校庆会是一种恶性循环吗？
    学妹请我吃麻辣烫有什么含义？
    江安水果购买指南
    川大各校区异地恋的故事
    为什么追了我好久的男生突然有了女朋友？
    川大男生如何防晒？
    15级军训地点是不是在学校？
    江安某男生用望远镜偷看女生寝室
    公交车防盗指南
    神奇海螺首次公布支付宝帐号

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿芽，巨琳
后期:软盘
`,
    url: config.baseUrl+'/26.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 7, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/26.mp3', file:'./public/fm/26.mp3'}, // optional enclosure
    itunesSubtitle: '频繁的校庆会是一种恶性循环吗？',
    itunesSummary: `欢迎收听神奇海螺第三季第7期,本期你将听到以下内容:

如何看待男票不愿在朋友圈公布恋情？
江安的圈存机都是腊鸡吗？
校园失窃竟因为撩妹？
江安周边最好吃的冒菜是？
呼吁川大食堂尽快实行饭菜变质的赔偿方案
神奇海螺从台本到后期全揭秘

感谢神奇海螺团队的幕后人员:
台本:曜么得 阿睡
后期:软盘`,
    itunesDuration: 1128,
    itunesKeywords: ['校庆','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '没送学妹到校车站的川大学长是不是直男癌？',
    description: `欢迎收听神奇海螺第三季第8期,本期你将听到以下内容:

没送学妹到校车站的川大学长是不是直男癌？
川大学生每个月要花多少话费？
我该如何徜徉在江安的英语角里？
该不该用食堂的餐盘喂狗？
我在饭店默默地给喜欢的妹子加了个鸡腿。
直男送女票化妆品指南。

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:曜么得，阿睡
后期:软盘
`,
    url: config.baseUrl+'/27.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 14, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/27.mp3', file:'./public/fm/27.mp3'}, // optional enclosure
    itunesSubtitle: '没送学妹到校车站的川大学长是不是直男癌？',
    itunesSummary: `欢迎收听神奇海螺第三季第8期,本期你将听到以下内容:

没送学妹到校车站的川大学长是不是直男癌？
川大学生每个月要花多少话费？
我该如何徜徉在江安的英语角里？
该不该用食堂的餐盘喂狗？
我在饭店默默地给喜欢的妹子加了个鸡腿。
直男送女票化妆品指南。

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:曜么得，阿睡
后期:软盘`,
    itunesDuration: 1703,
    itunesKeywords: ['直男癌','神奇海螺','四川大学','川大']
});
feed.item({
    title:  '在寝室里，该不该为了空调问题撕X？',
    description: `欢迎收听神奇海螺第三季第9期,本期你将听到以下内容:

在寝室里，该不该为了空调问题撕X？
男生的钥匙要不要挂在裤腰上？
教务处的办事效率到底有多低?
一楼到二楼该不该坐电梯？
是谁偷了他的内衣？
为什么被我喜欢过的人都会在不久后脱单？
18舍偷窥事件始末
川大休学指南

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，阿芽
后期:软盘
`,
    url: config.baseUrl+'/28.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 21, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/28.mp3', file:'./public/fm/28.mp3'}, // optional enclosure
    itunesSubtitle: '在寝室里，该不该为了空调问题撕X？',
    itunesSummary: `欢迎收听神奇海螺第三季第9期,本期你将听到以下内容:

在寝室里，该不该为了空调问题撕X？
男生的钥匙要不要挂在裤腰上？
教务处的办事效率到底有多低?
一楼到二楼该不该坐电梯？
是谁偷了他的内衣？
为什么被我喜欢过的人都会在不久后脱单？
18舍偷窥事件始末
川大休学指南

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，阿芽
后期:软盘`,
    itunesDuration: 1093,
    itunesKeywords: ['寝室空调','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '一个上进的女朋友能带你逃离颓废的生活吗？',
    description: `欢迎收听神奇海螺第三季第10期,本期你将听到以下内容:

一个上进的女朋友能带你逃离颓废的生活吗？
零壹社长自曝社内实行封建帝制
当我在lol里嘲讽自己喜欢的女生之后...
如果在江安开家早餐店，你想吃什么？
我在川大能遇到的最浪漫的事儿是什么？
抖腿这件小事儿
揭秘省振中在成都的地位

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:曜么得，阿睡
后期:软盘
`,
    url: config.baseUrl+'/29.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 28, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/29.mp3', file:'./public/fm/29.mp3'}, // optional enclosure
    itunesSubtitle: '一个上进的女朋友能带你逃离颓废的生活吗？',
    itunesSummary: `欢迎收听神奇海螺第三季第10期,本期你将听到以下内容:

一个上进的女朋友能带你逃离颓废的生活吗？
零壹社长自曝社内实行封建帝制
当我在lol里嘲讽自己喜欢的女生之后...
如果在江安开家早餐店，你想吃什么？
我在川大能遇到的最浪漫的事儿是什么？
抖腿这件小事儿
揭秘省振中在成都的地位

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:曜么得，阿睡
后期:软盘
`,
    itunesDuration: 1425,
    itunesKeywords: ['女朋友','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '比高中更漂亮，追求者却变少的原因是？',
    description: `欢迎收听神奇海螺第三季第11期,本期你将听到以下内容:

比高中更漂亮，追求者却变少的原因是？
川大小学期的课有没有必要选？
“不军训教”vs穆斯林
圈存机腊鸡能怪计院和软院吗？
期末考试要如何准备才能不放弃治疗？
川大学霸情侣长桥推算二项式
二刷军训是什么体验？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳 袋鼠 巨琳
后期:软盘
`,
    url: config.baseUrl+'/30.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Jul 11, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/30.mp3', file:'./public/fm/30.mp3'}, // optional enclosure
    itunesSubtitle: '比高中更漂亮，追求者却变少的原因是？',
    itunesSummary: `欢迎收听神奇海螺第三季第11期,本期你将听到以下内容:

比高中更漂亮，追求者却变少的原因是？
川大小学期的课有没有必要选？
“不军训教”vs穆斯林
圈存机腊鸡能怪计院和软院吗？
期末考试要如何准备才能不放弃治疗？
川大学霸情侣长桥推算二项式
二刷军训是什么体验？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳 袋鼠 巨琳
后期:软盘
`,
    itunesDuration: 1108,
    itunesKeywords: ['高中生','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '新司机们，请上车。',
    description: `欢迎收听神奇海螺第四季第1期,本期你将听到以下内容:

20块用来参加社团浪费吗？
到底该不该戒色？
传软盘月半将离开神奇海螺？
该不该为了奖学金和同学撕逼？
首度揭秘神奇海螺吧和神奇海螺电台的背后关系
遇到在宿舍发语音的室友我该怎么办？
揭秘海螺为什么要在第三周更新？
在川大宽带出问题了要找谁？
该怎样度过大学这几年？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，巨琳，袋鼠
后期:软盘
`,
    url: config.baseUrl+'/31.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Sep 25, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/31.mp3', file:'./public/fm/31.mp3'}, // optional enclosure
    itunesSubtitle: '新司机们，请上车。',
    itunesSummary: `欢迎收听神奇海螺第四季第1期,本期你将听到以下内容:

20块用来参加社团浪费吗？
到底该不该戒色？
传软盘月半将离开神奇海螺？
该不该为了奖学金和同学撕逼？
首度揭秘神奇海螺吧和神奇海螺电台的背后关系
遇到在宿舍发语音的室友我该怎么办？
揭秘海螺为什么要在第三周更新？
在川大宽带出问题了要找谁？
该怎样度过大学这几年？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，巨琳，袋鼠
后期:软盘
`,
    itunesDuration: 1301,
    itunesKeywords: ['新司机','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '挥手但不说再见',
    description: `欢迎收听神奇海螺第四季第2期,本期你将听到以下内容:

该不该半夜大声祝母校生日快乐？
还要和前任同班3年是一种怎样的体验？
想不想打车去文科楼上课？
海螺新老主播首次同台对话
川大防盗指北
来自月半的小惊喜

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:软盘
`,
    url: config.baseUrl+'/32.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 3, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/32.mp3', file:'./public/fm/32.mp3'}, // optional enclosure
    itunesSubtitle: '挥手但不说再见',
    itunesSummary: `欢迎收听神奇海螺第四季第2期,本期你将听到以下内容:

该不该半夜大声祝母校生日快乐？
还要和前任同班3年是一种怎样的体验？
想不想打车去文科楼上课？
海螺新老主播首次同台对话
川大防盗指北
来自月半的小惊喜

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:软盘
`,
    itunesDuration: 1303,
    itunesKeywords: ['月半小夜曲','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '为什么恋爱的时候总想单身，单身的时候又总想恋爱？',
    description: `欢迎收听神奇海螺第四季第3期,本期你将听到以下内容:

为什么恋爱的时候总想单身，单身的时候又总想恋爱？
前江安时代回忆录。
在川大，如何才能拿到一个满分的体育成绩？
所以今天周鼎的中华文化抽签回答问题了吗？
海螺新主播的科学性别是？
在川大的图书馆里最怕碰到的三种人。
高分子表白观光团终于要出售套票了

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，袋鼠，北阳
后期:诶杂
`,
    url: config.baseUrl+'/33.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 16, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/33.mp3', file:'./public/fm/33.mp3'}, // optional enclosure
    itunesSubtitle: '挥手但不说再见',
    itunesSummary: `欢迎收听神奇海螺第四季第3期,本期你将听到以下内容:

为什么恋爱的时候总想单身，单身的时候又总想恋爱？
前江安时代回忆录。
在川大，如何才能拿到一个满分的体育成绩？
所以今天周鼎的中华文化抽签回答问题了吗？
海螺新主播的科学性别是？
在川大的图书馆里最怕碰到的三种人。
高分子表白观光团终于要出售套票了

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，袋鼠，北阳
后期:诶杂
`,
    itunesDuration: 1259,
    itunesKeywords: ['恋爱&单身','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '我一个人睡觉。',
    description: `神奇海螺第四季第4期来了！本期你将会听到:

丢了一打一寸照片后该怎么办？
寝室四连坐，从来没赢过。
在川大应该找谁咨询心理问题？
我什么时候才能用得上川大的快递柜？
我一个人睡觉。
川大某学长用女友的睡姿照当头像的后果是？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，曜么得，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/34.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 23, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/34.mp3', file:'./public/fm/34.mp3'}, // optional enclosure
    itunesSubtitle: '我一个人睡觉。',
    itunesSummary: `神奇海螺第四季第4期来了！本期你将会听到:

丢了一打一寸照片后该怎么办？
寝室四连坐，从来没赢过。
在川大应该找谁咨询心理问题？
我什么时候才能用得上川大的快递柜？
我一个人睡觉。
川大某学长用女友的睡姿照当头像的后果是？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，曜么得，阿芽
后期:诶杂
`,
    itunesDuration: 1271,
    itunesKeywords: ['睡觉','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '作为一个川大的女生，你会选择电子科大的男生吗？',
    description: `神奇海螺第四季第5期来了！本期你将会听到:

在秋名山做瑜伽是怎样的一种体验？
只有学习使我快乐。
在川大我要如何度过这寒冬？
海螺团队里到底有多少个ssr？
在成都要去哪里看大熊猫？
我的奖学金要多久才能到手？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，袋鼠，北阳
后期:诶杂
`,
    url: config.baseUrl+'/35.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 30, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/35.mp3', file:'./public/fm/35.mp3'}, // optional enclosure
    itunesSubtitle: '作为一个川大的女生，你会选择电子科大的男生吗？',
    itunesSummary: `神奇海螺第四季第5期来了！本期你将会听到:

在秋名山做瑜伽是怎样的一种体验？
只有学习使我快乐。
在川大我要如何度过这寒冬？
海螺团队里到底有多少个ssr？
在成都要去哪里看大熊猫？
我的奖学金要多久才能到手？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:巨琳，袋鼠，北阳
后期:诶杂
`,
    itunesDuration: 1430,
    itunesKeywords: ['电子科大','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '川大人进城的困难指数',
    description: `神奇海螺第四季第6期来了！本期你将会听到:

如何看待只会让你多喝热水的男朋友？
网曝川大送水大叔直入女生寝室
从川大学生的出行来看网约车之变
饮水机里的水能用来洗澡吗？
霸道总裁的甜心宝贝
在川大你能孤独成什么样？
有了川大互动课堂还怎么逃课？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/36.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 6, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/36.mp3', file:'./public/fm/36.mp3'}, // optional enclosure
    itunesSubtitle: '川大人进城的困难指数',
    itunesSummary: `神奇海螺第四季第6期来了！本期你将会听到:

如何看待只会让你多喝热水的男朋友？
网曝川大送水大叔直入女生寝室
从川大学生的出行来看网约车之变
饮水机里的水能用来洗澡吗？
霸道总裁的甜心宝贝
在川大你能孤独成什么样？
有了川大互动课堂还怎么逃课？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:诶杂
`,
    itunesDuration: 1642,
    itunesKeywords: ['交通','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '能请你帮我朋友圈第一条投个票吗？',
    description: `神奇海螺第四季第7期来了！本期你将会听到:

双11中的川大
川厦学子互通有无
能请你帮我朋友圈第一条投个票吗?
如何委婉的提醒室友去洗澡？
带个暖壶去上课是一种怎样的体验？
直播已经火到青广了？
如何看待保卫处拖走占道的自行车？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    url: config.baseUrl+'/37.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 20, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/37.mp3', file:'./public/fm/37.mp3'}, // optional enclosure
    itunesSubtitle: '能请你帮我朋友圈第一条投个票吗？',
    itunesSummary: `神奇海螺第四季第7期来了！本期你将会听到:

双11中的川大
川厦学子互通有无
能请你帮我朋友圈第一条投个票吗?
如何委婉的提醒室友去洗澡？
带个暖壶去上课是一种怎样的体验？
直播已经火到青广了？
如何看待保卫处拖走占道的自行车？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    itunesDuration: 1494,
    itunesKeywords: ['双十一','神奇海螺','四川大学','川大']
});
feed.item({
    title:  '川大乱停自行车的锅到底该甩给谁？',
    description: `神奇海螺第四季第8期来了！本期你将会听到:

川大乱停自行车的锅到底该甩给谁？
如何看待一边占着保研名额一边准备出国的同学？
在成都该去哪搓澡？
食堂里的陌生妹子为什么要和我坐一起看《朝闻天下》？
洗手间里的猥琐男。
有什么事不能撸个串来解决呢？
省钱给男友买衣服是不是傻？
你也晕校车吗？
该如何抵抗成都的雾霾？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    url: config.baseUrl+'/38.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 27, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/38.mp3', file:'./public/fm/38.mp3'}, // optional enclosure
    itunesSubtitle: '川大乱停自行车的锅到底该甩给谁？',
    itunesSummary: `神奇海螺第四季第8期来了！本期你将会听到:

川大乱停自行车的锅到底该甩给谁？
如何看待一边占着保研名额一边准备出国的同学？
在成都该去哪搓澡？
食堂里的陌生妹子为什么要和我坐一起看《朝闻天下》？
洗手间里的猥琐男。
有什么事不能撸个串来解决呢？
省钱给男友买衣服是不是傻？
你也晕校车吗？
该如何抵抗成都的雾霾？


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    itunesDuration: 1494,
    itunesKeywords: ['自行车之谜','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '如何优雅的虐狗？',
    description: `神奇海螺第四季第9期来了！本期你将会听到:

如何优雅的虐狗？
腿短的同学怎么过长桥？
川大的考表有没有可能在机票涨价之前出来？
如何看待图书馆占座行为？
表白失败却被围观女生看上是一种怎样的体验？
行了，实验报告你就只写5页吧。


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    url: config.baseUrl+'/39.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 5, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/39.mp3', file:'./public/fm/39.mp3'}, // optional enclosure
    itunesSubtitle: '如何优雅的虐狗？',
    itunesSummary: `神奇海螺第四季第9期来了！本期你将会听到:

如何优雅的虐狗？
腿短的同学怎么过长桥？
川大的考表有没有可能在机票涨价之前出来？
如何看待图书馆占座行为？
表白失败却被围观女生看上是一种怎样的体验？
行了，实验报告你就只写5页吧。


神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    itunesDuration: 1590,
    itunesKeywords: ['虐狗','神奇海螺','四川大学','川大']
});




feed.item({
    title:  '在川大，情侣应该去哪亲热？',
    description: `神奇海螺第四季第10期来了！本期你将会听到:

在川大，情侣应该去哪亲热？
小吃城能不能不刷卡直接排队拿面？
回复慢就是不喜欢吗？
如何才能在川大的自行车长龙里求生存？
究竟选择低分还是挂调这门课？
千万别在晚上做决定！
新出来的川大生活服务APP能做点啥？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/40.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 11, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/40.mp3', file:'./public/fm/40.mp3'}, // optional enclosure
    itunesSubtitle: '在川大，情侣应该去哪亲热？',
    itunesSummary: `神奇海螺第四季第10期来了！本期你将会听到:

在川大，情侣应该去哪亲热？
小吃城能不能不刷卡直接排队拿面？
回复慢就是不喜欢吗？
如何才能在川大的自行车长龙里求生存？
究竟选择低分还是挂调这门课？
千万别在晚上做决定！
新出来的川大生活服务APP能做点啥？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:阿睡，曜么得，阿芽
后期:诶杂
`,
    itunesDuration: 1288,
    itunesKeywords: ['情侣','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '如何顺利的通过期末考试？',
    description: `神奇海螺第四季第11期来了！本期你将会听到:

如何顺利的通过期末考试？
电子学院为何会引起表白的浪潮？
雾霾和彭州石化到底有没有关系？
在川大如何科学的选课?
神奇海螺为什么点名要招小黄文作者？
谁在控制川大的断电与否？
为什么商业街开这么多家奶茶店还是不便宜？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    url: config.baseUrl+'/41.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Dec 18, 2016', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/41.mp3', file:'./public/fm/41.mp3'}, // optional enclosure
    itunesSubtitle: '如何顺利的通过期末考试？',
    itunesSummary: `神奇海螺第四季第11期来了！本期你将会听到:

如何顺利的通过期末考试？
电子学院为何会引起表白的浪潮？
雾霾和彭州石化到底有没有关系？
在川大如何科学的选课?
神奇海螺为什么点名要招小黄文作者？
谁在控制川大的断电与否？
为什么商业街开这么多家奶茶店还是不便宜？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，芽芽
后期:诶杂
`,
    itunesDuration: 1473,
    itunesKeywords: ['情侣','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '加油吃！你是最胖的！#春节特辑',
    description: `神奇海螺第四季春节特辑来了！本期你将会听到:

2016年川大的这10大事件
你的寒假计划怎么样了？
被人喊“师傅”是怎样的体验？
我的寒假相亲日记
你上了四川哪个大学啊？
寒假回家多了一个弟弟。
听完神奇海螺制作团队全员的声音会不会让人怀孕

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:台本组全体人员
后期:诶杂
`,
    url: config.baseUrl+'/42.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Jan 28, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/42.mp3', file:'./public/fm/42.mp3'}, // optional enclosure
    itunesSubtitle: '加油吃！你是最胖的！#春节特辑',
    itunesSummary: `神奇海螺第四季春节特辑来了！本期你将会听到:

2016年川大的这10大事件
你的寒假计划怎么样了？
被人喊“师傅”是怎样的体验？
我的寒假相亲日记
你上了四川哪个大学啊？
寒假回家多了一个弟弟。
听完神奇海螺制作团队全员的声音会不会让人怀孕

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:台本组全体人员
后期:诶杂
`,
    itunesDuration: 2049,
    itunesKeywords: ['情侣','神奇海螺','四川大学','川大']
});





feed.item({
    title:  '结束了二十年单身之后的这一年',
    description: `神奇海螺第五季第一期来了！本期你将会听到:

成都天气迟迟不肯回暖，海螺呼吁各方保持克制。
寝室撕X攻略
我川图书馆为何刚开学就座无虚席？
夫妻肺片该不该为没有夫妻道歉？
体测又开始了，什么时候报名最合适？
结束了二十年单身之后的这一年
震惊！学校面包店里的生产日期竟然被...

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/43.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Mar 18, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/43.mp3', file:'./public/fm/43.mp3'}, // optional enclosure
    itunesSubtitle: '结束了二十年单身之后的这一年',
    itunesSummary: `神奇海螺第五季第一期来了！本期你将会听到:

成都天气迟迟不肯回暖，海螺呼吁各方保持克制。
寝室撕X攻略
我川图书馆为何刚开学就座无虚席？
夫妻肺片该不该为没有夫妻道歉？
体测又开始了，什么时候报名最合适？
结束了二十年单身之后的这一年
震惊！学校面包店里的生产日期竟然被...

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    itunesDuration: 1252,
    itunesKeywords: ['单身','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '扒一扒川大的男女寝室',
    description: `神奇海螺第五季第2期来了！本期你将会听到:

看到前女友在晒现任的照片是怎样的一种感受？
川大脱单率最高的学院是哪一个？
为什么鸡腿套饭比鸡腿都要便宜？
扒一扒川大的男女寝室
喜欢陈粒的男同学就是弯的吗？
没洗头的时候遇到前任和前任的现任是怎样的一种体验？
让北方朋友沉默,南方朋友流泪的成都天气，到底什么时候回暖？？？
海螺怎么看待玻璃杯事件？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/44.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Mar 26, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/44.mp3', file:'./public/fm/44.mp3'}, // optional enclosure
    itunesSubtitle: '扒一扒川大的男女寝室',
    itunesSummary: `神奇海螺第五季第2期来了！本期你将会听到:

看到前女友在晒现任的照片是怎样的一种感受？
川大脱单率最高的学院是哪一个？
为什么鸡腿套饭比鸡腿都要便宜？
扒一扒川大的男女寝室
喜欢陈粒的男同学就是弯的吗？
没洗头的时候遇到前任和前任的现任是怎样的一种体验？
让北方朋友沉默,南方朋友流泪的成都天气，到底什么时候回暖？？？
海螺怎么看待玻璃杯事件？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    itunesDuration: 1408,
    itunesKeywords: ['寝室','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '该不该在公用洗衣机里洗内衣？',
    description: `神奇海螺第五季第3期来了！本期你将会听到:

你会因校园卡头像太丑而不想找回它吗？
尊贵的川大黄钻贵族看了之后会沉默的东西是什么？
一个人的清明小长假要怎么过？
为了她来到川大，却庆幸她和跑车男在一起。
如何面对合唱比赛制造的噪音？
如何偶遇神奇海螺的制作团队？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/45.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 3, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/45.mp3', file:'./public/fm/45.mp3'}, // optional enclosure
    itunesSubtitle: '该不该在公用洗衣机里洗内衣？',
    itunesSummary: `神奇海螺第五季第3期来了！本期你将会听到:

你会因校园卡头像太丑而不想找回它吗？
尊贵的川大黄钻贵族看了之后会沉默的东西是什么？
一个人的清明小长假要怎么过？
为了她来到川大，却庆幸她和跑车男在一起。
如何面对合唱比赛制造的噪音？
如何偶遇神奇海螺的制作团队？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    itunesDuration: 1457,
    itunesKeywords: ['洗衣机','神奇海螺','四川大学','川大']
});



feed.item({
    title:  '在校医院里整容是一种怎样的体验？',
    description: `神奇海螺第五季第4期来了！本期你将会听到:

我们该把沃森的白板裱起来吗？
如何心平气和的去讲道理？
为什么资产阶级不用写实验报告？
某同学网购液压钳打击共享单车私有化
川大地中海风寝室走红网络
在校医院里整容是一种怎样的体验？
在自习室戳破奶茶是一种怎样的体验？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    url: config.baseUrl+'/46.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 9, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/46.mp3', file:'./public/fm/46.mp3'}, // optional enclosure
    itunesSubtitle: '在校医院里整容是一种怎样的体验？',
    itunesSummary: `神奇海螺第五季第4期来了！本期你将会听到:

我们该把沃森的白板裱起来吗？
如何心平气和的去讲道理？
为什么资产阶级不用写实验报告？
某同学网购液压钳打击共享单车私有化
川大地中海风寝室走红网络
在校医院里整容是一种怎样的体验？
在自习室戳破奶茶是一种怎样的体验？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂
`,
    itunesDuration: 1455,
    itunesKeywords: ['整容','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '室友明晚就要脱单，我该怎么办？',
    description: `神奇海螺第五季第5期来了！本期你将会听到:

你听过最虐心的话是？
在100斤的世界里是怎样的一种体验？
你赞成毕业包分配对象吗？
室友明晚就要脱单，我该怎么办？
耳朵太好是一种怎样的体验？
震惊！比云歌然还要弱小的男生竟然是...
川大共享单车停车乱象
该不该给长桥安装传送带？
在川大，如何才能紧跟潮流？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
炎炎夏日又将袭来，最解暑的莫过于听鬼故事了。川大也代代相传着一些故事。无论是二基楼的迷宫，还是华西的钟楼女鬼，你听说过哪些川大的灵异故事呢？

神奇海螺推出夏日特别企划“百鬼夜谈”，征集大家听说过的川大鬼故事。除了传说以外，你也可以向我们分享，你来到川大后亲生经历的灵异事件。我们将选出令人毛骨悚然的故事入选本次特别企划。所有入选节目的稿件都将获得精美小礼品，同时，最精彩的故事将额外得到100元悬赏金。

投稿方式请访问scuinfo.com发帖#川大灵异事件#+完整的故事，我们诚邀你一起加入，百鬼夜谈。

你也可以直接点此链接分享你的故事 http://t.cn/RXcJeQL
`,
    url: config.baseUrl+'/47.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 16, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/47.mp3', file:'./public/fm/47.mp3'}, // optional enclosure
    itunesSubtitle: '室友明晚就要脱单，我该怎么办？',
    itunesSummary: `神奇海螺第五季第5期来了！本期你将会听到:

你听过最虐心的话是？
在100斤的世界里是怎样的一种体验？
你赞成毕业包分配对象吗？
室友明晚就要脱单，我该怎么办？
耳朵太好是一种怎样的体验？
震惊！比云歌然还要弱小的男生竟然是...
川大共享单车停车乱象
该不该给长桥安装传送带？
在川大，如何才能紧跟潮流？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
炎炎夏日又将袭来，最解暑的莫过于听鬼故事了。川大也代代相传着一些故事。无论是二基楼的迷宫，还是华西的钟楼女鬼，你听说过哪些川大的灵异故事呢？

神奇海螺推出夏日特别企划“百鬼夜谈”，征集大家听说过的川大鬼故事。除了传说以外，你也可以向我们分享，你来到川大后亲生经历的灵异事件。我们将选出令人毛骨悚然的故事入选本次特别企划。所有入选节目的稿件都将获得精美小礼品，同时，最精彩的故事将额外得到100元悬赏金。

投稿方式请访问scuinfo.com发帖#川大灵异事件#+完整的故事，我们诚邀你一起加入，百鬼夜谈。

你也可以直接点此链接分享你的故事 http://t.cn/RXcJeQL
`,
    itunesDuration: 1455,
    itunesKeywords: ['脱单','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '惊悚川大',
    description: `神奇海螺第五季第6期来了！本期你将会听到:

那些让你毛骨悚然的川大灵异事件
23岁的他凭什么已经谈了好几个上亿的项目？
单纯的小白兔男生就活该被睡吗？
进错女厕所，如何优雅的出来？
如何面对喜欢的男生是个gay这件事？
全班只有4名男生，看恋爱技巧有用吗？
人美到底要不要多读书？
川大要开整容公选课了吗？
沃森用过的马克笔的最终下落

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
我们或许都有过这样的时刻，看朋友圈刷屏的剧；玩最近爆款的游戏；去并不想唱的 KTV；刷不想刷的夜。或者只是参加集体活动时，跟着发活动照片到朋友圈，互相点赞；或者只是聊天时强行发出的“哈哈哈哈哈哈哈哈”。

我们中大多数人，都尝试过合群，那么你呢？

为了合群，你都做过什么？现在回想起来你觉得值得吗？如果你从来没有尝试过去合群，或者决定你不需要再合群了，又是什么原因使得你能做出这样的决定？

请告诉我们你的故事吧。

投稿方式请访问scuinfo.com发帖【#合群#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RXOARmI
`,
    url: config.baseUrl+'/48.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Apr 23, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/48.mp3', file:'./public/fm/48.mp3'}, // optional enclosure
    itunesSubtitle: '惊悚川大',
    itunesSummary: `神奇海螺第五季第6期来了！本期你将会听到:

那些让你毛骨悚然的川大灵异事件
23岁的他凭什么已经谈了好几个上亿的项目？
单纯的小白兔男生就活该被睡吗？
进错女厕所，如何优雅的出来？
如何面对喜欢的男生是个gay这件事？
全班只有4名男生，看恋爱技巧有用吗？
人美到底要不要多读书？
川大要开整容公选课了吗？
沃森用过的马克笔的最终下落

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
我们或许都有过这样的时刻，看朋友圈刷屏的剧；玩最近爆款的游戏；去并不想唱的 KTV；刷不想刷的夜。或者只是参加集体活动时，跟着发活动照片到朋友圈，互相点赞；或者只是聊天时强行发出的“哈哈哈哈哈哈哈哈”。

我们中大多数人，都尝试过合群，那么你呢？

为了合群，你都做过什么？现在回想起来你觉得值得吗？如果你从来没有尝试过去合群，或者决定你不需要再合群了，又是什么原因使得你能做出这样的决定？

请告诉我们你的故事吧。

投稿方式请访问scuinfo.com发帖【#合群#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RXOARmI
`,
    itunesDuration: 1792,
    itunesKeywords: ['惊悚川大','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '为了合群，你都做过哪些事？',
    description: `神奇海螺第五季第7期来了！本期你将会听到:

饿的时候要怎样克服？
“要抱抱”为何变成“美的才抱抱”活动？
没有期中考的人是怎样的一种体验？
IFS的大熊猫为何对求婚不为所动？
姨妈来的时候有一个男票的作用是？
该不该曝光乱停自行车的同学？
为什么五四放假半天学生却怨声载道？
一个爱说梦话的室友是有多恐怖？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
在大学有没有做了什么事让你感觉：“幸好做了这件事，不然我的大学就不完美”，如果有，那么请告诉我们你的故事吧。

下期话题：#在大学幸好做了的事#

投稿方式请访问scuinfo.com发帖【#在大学幸好做了的事#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaGxuWl
`,
    url: config.baseUrl+'/49.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 7, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/49.mp3', file:'./public/fm/49.mp3'}, // optional enclosure
    itunesSubtitle: '为了合群，你都做过哪些事？',
    itunesSummary: `神奇海螺第五季第7期来了！本期你将会听到:

饿的时候要怎样克服？
“要抱抱”为何变成“美的才抱抱”活动？
没有期中考的人是怎样的一种体验？
IFS的大熊猫为何对求婚不为所动？
姨妈来的时候有一个男票的作用是？
该不该曝光乱停自行车的同学？
为什么五四放假半天学生却怨声载道？
一个爱说梦话的室友是有多恐怖？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
在大学有没有做了什么事让你感觉：“幸好做了这件事，不然我的大学就不完美”，如果有，那么请告诉我们你的故事吧。

下期话题：#在大学幸好做了的事#

投稿方式请访问scuinfo.com发帖【#在大学幸好做了的事#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaGxuWl
`,
    itunesDuration: 1327,
    itunesKeywords: ['合群','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '作为川大的男同学,如何优雅的打伞走过长桥？',
    description: `神奇海螺第五季第8期来了！本期你将会听到:

他们说：在大学里幸好做了什么？
华西电梯事件
你为什么要选择原谅他呢？
如何应对体育理论考试？
为什么英语听力里男女播音员要吞咽口水？
每个月最惨的事情是什么？
作为川大的男同学如何优雅的打伞走过长桥？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
下期话题：在下雨天，你会不会邀请没带伞的陌生人来一起打伞呢？怎么邀请？对同性和异性有什么不同？欢迎参与我们的讨论。

下期话题：#下雨天要不要邀请陌生人一起打伞#

投稿方式请访问scuinfo.com发帖【#下雨天要不要邀请陌生人一起打伞#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaNDzcA
`,
    url: config.baseUrl+'/50.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 14, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/50.mp3', file:'./public/fm/50.mp3'}, // optional enclosure
    itunesSubtitle: '作为川大的男同学,如何优雅的打伞走过长桥？',
    itunesSummary: `神奇海螺第五季第8期来了！本期你将会听到:

他们说：在大学里幸好做了什么？
华西电梯事件
你为什么要选择原谅他呢？
如何应对体育理论考试？
为什么英语听力里男女播音员要吞咽口水？
每个月最惨的事情是什么？
作为川大的男同学如何优雅的打伞走过长桥？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
下期话题：在下雨天，你会不会邀请没带伞的陌生人来一起打伞呢？怎么邀请？对同性和异性有什么不同？欢迎参与我们的讨论。

下期话题：#下雨天要不要邀请陌生人一起打伞#

投稿方式请访问scuinfo.com发帖【#下雨天要不要邀请陌生人一起打伞#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaNDzcA
`,
    itunesDuration: 1722,
    itunesKeywords: ['打伞','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '只想好好学习不想谈恋爱错了吗？',
    description: `神奇海螺第五季第9期来了！本期你将会听到:

只想好好学习不想谈恋爱错了吗？
公选课上如何优雅的与Ta发生故事？
把天聊死的技能是怎样点亮的？
室友打呼噜我该怎么办?
如何才能通过info上的临时男友招聘？
下雨天要不要和陌生人一起打伞？
从180斤到110斤，他身上发生了什么？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽，维拉德
后期:诶杂

------
下期话题：你被秀过最狠的恩爱是？欢迎参与我们的讨论。

下期话题：#被秀过最狠的恩爱#

投稿方式请访问scuinfo.com发帖【#被秀过最狠的恩爱#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaBalR1
`,
    url: config.baseUrl+'/51.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'May 21, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/51.mp3', file:'./public/fm/51.mp3'}, // optional enclosure
    itunesSubtitle: '只想好好学习不想谈恋爱错了吗？',
    itunesSummary: `神奇海螺第五季第8期来了！本期你将会听到:

他们说：在大学里幸好做了什么？
华西电梯事件
你为什么要选择原谅他呢？
如何应对体育理论考试？
为什么英语听力里男女播音员要吞咽口水？
每个月最惨的事情是什么？
作为川大的男同学如何优雅的打伞走过长桥？

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽
后期:诶杂

------
下期话题：在下雨天，你会不会邀请没带伞的陌生人来一起打伞呢？怎么邀请？对同性和异性有什么不同？欢迎参与我们的讨论。

下期话题：#下雨天要不要邀请陌生人一起打伞#

投稿方式请访问scuinfo.com发帖【#下雨天要不要邀请陌生人一起打伞#+完整的故事】我们将精选出大家的故事进入下期节目。

你也可以直接点此链接分享你的故事 http://t.cn/RaBalR1
`,
    itunesDuration: 1648,
    itunesKeywords: ['学习','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '川大的女生会介意男同学的腿毛吗？',
    description: `神奇海螺第五季第10期来了,本期是神奇海螺第五季大结局，你将会听到:

是不是颜值越高的越难脱单？
川大的女生会介意男同学的腿毛吗？
这个端午节，你牛逼了吗？
视奸前男友的现任上瘾是一种怎样的体验？
你被秀过最狠的恩爱是？
球场的三大错觉是？
穿女票的短裙去上自习是一种怎样的体验？
补考和缺考新规分析

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽，维拉德
后期:诶杂

`,
    url: config.baseUrl+'/52.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Jun 4, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/52.mp3', file:'./public/fm/52.mp3'}, // optional enclosure
    itunesSubtitle: '川大的女生会介意男同学的腿毛吗？',
    itunesSummary: `神奇海螺第五季第10期来了,本期是神奇海螺第五季大结局，你将会听到:

是不是颜值越高的越难脱单？
川大的女生会介意男同学的腿毛吗？
这个端午节，你牛逼了吗？
视奸前男友的现任上瘾是一种怎样的体验？
你被秀过最狠的恩爱是？
球场的三大错觉是？
穿女票的短裙去上自习是一种怎样的体验？
补考和缺考新规分析

神奇海螺团队开启了支付宝赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽，维拉德
后期:诶杂
`,
    itunesDuration: 1527,
    itunesKeywords: ['颜值','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '从前的军训情侣们如何约会？',
    description: `神奇海螺第五季暑期特辑来了，本期你将会听到:

旅行中都有哪些可遇不可求的事？
究竟是什么让学长愿意用小学期的课换军训？
和网红女主播在一个寝室是一种怎样的体验？
为什么外国同学问我是不是要打仗了？
从前的军训情侣们如何约会？
校车站什么时候才能兑现要增加班次的承诺？
如何有效驱逐蚊子？
你认为王者荣耀陷害了人生吗？

神奇海螺网易云音乐已经开通了赞赏功能，请下载网易云音乐最新版打开神奇海螺给制作组丢个鸡腿~

同时神奇海螺也接受支付宝小额赞助，赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽，维拉德
后期:诶杂


`,
    url: config.baseUrl+'/53.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Jul 16, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/53.mp3', file:'./public/fm/53.mp3'}, // optional enclosure
    itunesSubtitle: '从前的军训情侣们如何约会？',
    itunesSummary: `神奇海螺第五季暑期特辑来了，本期你将会听到:

旅行中都有哪些可遇不可求的事？
究竟是什么让学长愿意用小学期的课换军训？
和网红女主播在一个寝室是一种怎样的体验？
为什么外国同学问我是不是要打仗了？
从前的军训情侣们如何约会？
校车站什么时候才能兑现要增加班次的承诺？
如何有效驱逐蚊子？
你认为王者荣耀陷害了人生吗？

神奇海螺网易云音乐已经开通了赞赏功能，请下载网易云音乐最新版打开神奇海螺给制作组丢个鸡腿~

同时神奇海螺也接受支付宝小额赞助，赞助帐号:shenqihailuo@qq.com 欢迎小额赞助！
感谢神奇海螺团队的幕后人员:
台本:北阳，阿芽，维拉德
后期:诶杂


`,
    itunesDuration: 2666,
    itunesKeywords: ['约会','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '寝室父子之争',
    description: `神奇海螺第六季第1期来了！本期你将会听到:
    
    寝室父子之争
    所以你的假期计划完成了吗？
    如果你愿意陪我往返21舍和文科楼
    穿睡衣下去取外卖被新生家长围观是一种怎样的体验？
    王者农药有解药吗？
    为什么超七成大学生曾陷入“生活费不够用”的窘境？
    相亲节目为何卷土重来？
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你在萌新时期做过哪些糗事？欢迎参与我们的讨论。
`,
    url: config.baseUrl+'/54.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Sep 17, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/54.mp3', file:'./public/fm/54.mp3'}, // optional enclosure
    itunesSubtitle: '寝室父子之争',
    itunesSummary: `神奇海螺第六季第1期来了！本期你将会听到:
    
    寝室父子之争
    所以你的假期计划完成了吗？
    如果你愿意陪我往返21舍和文科楼
    穿睡衣下去取外卖被新生家长围观是一种怎样的体验？
    王者农药有解药吗？
    为什么超七成大学生曾陷入“生活费不够用”的窘境？
    相亲节目为何卷土重来？
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你在萌新时期做过哪些糗事？欢迎参与我们的讨论。
`,
    itunesDuration: 1430,
    itunesKeywords: ['父子','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '江安真的有美食吗？',
    description: `神奇海螺第六季第2期来了！本期你将会听到:
    
    长的年轻该不该困扰？
    江安真的有美食吗？
    如果川大也按照兴趣分寝室...
    绩点没到3.4就很垃圾？
    萌新期间我都做过什么糗事？
    你发如雪凄美了离别。
    自行车乱象还有没有人管了？
    为什么没人给我打伞？
    垃圾桶里面为什么不能有垃圾？
    大三还没过六级意味着什么？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你的寝室究竟有多基/姬，不限男女哟
    
`,
    url: config.baseUrl+'/55.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Sep 24, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/55.mp3', file:'./public/fm/55.mp3'}, // optional enclosure
    itunesSubtitle: '江安真的有美食吗？',
    itunesSummary: `神奇海螺第六季第2期来了！本期你将会听到:
    
    长的年轻该不该困扰？
    江安真的有美食吗？
    如果川大也按照兴趣分寝室...
    绩点没到3.4就很垃圾？
    萌新期间我都做过什么糗事？
    你发如雪凄美了离别。
    自行车乱象还有没有人管了？
    为什么没人给我打伞？
    垃圾桶里面为什么不能有垃圾？
    大三还没过六级意味着什么？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你的寝室究竟有多基/姬，不限男女哟
    
`,
    itunesDuration: 1553,
    itunesKeywords: ['美食','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '能驾驭住粉红色的男孩子究竟是啥样的？',
    description: `神奇海螺第六季第3期来了！本期你将会听到:
    
    你的寝室究竟有多基/姬呢？
    只为留下联系方式某同学女就撞碎了某同学男的曲面屏？
    没有人邀请我组队的真正原因是？
    有人需要180的男朋友吗，不抽烟不喝酒的那种
    为啥在寝室写个作业都要被喷？
    能驾驭住粉红色的男孩子究竟是啥样的？
    你希望在川大食堂吃到哪种家乡美食？
    如何看待辅导员要求女生去整理男生寝室？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：大家都在419米的长桥上和朋友聊些什么话题呢？
`,
    url: config.baseUrl+'/56.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 2, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/56.mp3', file:'./public/fm/56.mp3'}, // optional enclosure
    itunesSubtitle: '能驾驭住粉红色的男孩子究竟是啥样的？',
    itunesSummary: `神奇海螺第六季第3期来了！本期你将会听到:
    
    你的寝室究竟有多基/姬呢？
    只为留下联系方式某同学女就撞碎了某同学男的曲面屏？
    没有人邀请我组队的真正原因是？
    有人需要180的男朋友吗，不抽烟不喝酒的那种
    为啥在寝室写个作业都要被喷？
    能驾驭住粉红色的男孩子究竟是啥样的？
    你希望在川大食堂吃到哪种家乡美食？
    如何看待辅导员要求女生去整理男生寝室？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：大家都在419米的长桥上和朋友聊些什么话题呢？
`,
    itunesDuration: 1750,
    itunesKeywords: ['美食','神奇海螺','四川大学','川大']
});


feed.item({
    title:  '男生主动逼你分手的套路有哪些？',
    description: `神奇海螺第六季第4期来了！本期你将会听到:
    
    长桥往事。
    怎样才能在冬天有效的起床？
    主播二人被爆是塑料姐妹花？
    男生主动逼你分手的套路有哪些？
    为何某男同学为了一篇SCI竟然愿意被睡？
    老师点你的名字，全班却都扭头看我是怎样的一种暧昧？
    两个微信号的好处有哪些？
    鞋子白更容易撩妹吗？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你的拖延症能厉害到什么程度
    ______
    另外，神奇海螺团队正在招新中，欢迎各位来这里和一群有趣的同学去创作一些有趣的节目。
    
    本次招新主要招募【台本组的同学以及女主播】，请将你的【基本个人信息】+【自我介绍】+【你要应聘的岗位附件】发送至shenqihailuo@qq.com
    其中，主播组需发送一段五分钟以上的试音音频（体现你个人的风格）；台本组需按照往期节目写一份2000字以上的台本。或者你就是特别喜欢海螺特想加入海螺，请直接联系工作人员qq:641634613
`,
    url: config.baseUrl+'/57.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 15, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/57.mp3', file:'./public/fm/57.mp3'}, // optional enclosure
    itunesSubtitle: '男生主动逼你分手的套路有哪些？',
    itunesSummary: `神奇海螺第六季第4期来了！本期你将会听到:
    
    长桥往事。
    怎样才能在冬天有效的起床？
    主播二人被爆是塑料姐妹花？
    男生主动逼你分手的套路有哪些？
    为何某男同学为了一篇SCI竟然愿意被睡？
    老师点你的名字，全班却都扭头看我是怎样的一种暧昧？
    两个微信号的好处有哪些？
    鞋子白更容易撩妹吗？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题：你的拖延症能厉害到什么程度
    ______
    另外，神奇海螺团队正在招新中，欢迎各位来这里和一群有趣的同学去创作一些有趣的节目。
    
    本次招新主要招募【台本组的同学以及女主播】，请将你的【基本个人信息】+【自我介绍】+【你要应聘的岗位附件】发送至shenqihailuo@qq.com
    其中，主播组需发送一段五分钟以上的试音音频（体现你个人的风格）；台本组需按照往期节目写一份2000字以上的台本。或者你就是特别喜欢海螺特想加入海螺，请直接联系工作人员qq:641634613
`,
    itunesDuration: 1529,
    itunesKeywords: ['分手','神奇海螺','四川大学','川大']
});

feed.item({
    title:  '为什么男朋友总是很关心我的室友？',
    description: `神奇海螺第六季第5期来了！本期你将会听到:
    
    学妹接近我图的到底是什么？
    为什么男朋友总是很关心我的室友？
    点外卖的时候如何留言卖家才会care你？
    室友经常换床单竟然是因为？
    新主播私人生活大揭秘
    如何避免成为拖延症晚期患者？
    川大周边多个公交站由于地铁施工关系被临时取消
    把自行车停在马路中央的人
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题："你过得去小北门吗？"和"你在阳台上看得到楼下吗？"，你还听过哪些扎心的话？
    `,
    url: config.baseUrl+'/58.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Oct 23, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/58.mp3', file:'./public/fm/58.mp3'}, // optional enclosure
    itunesSubtitle: '为什么男朋友总是很关心我的室友？',
    itunesSummary: `神奇海螺第六季第5期来了！本期你将会听到:
    
    学妹接近我图的到底是什么？
    为什么男朋友总是很关心我的室友？
    点外卖的时候如何留言卖家才会care你？
    室友经常换床单竟然是因为？
    新主播私人生活大揭秘
    如何避免成为拖延症晚期患者？
    川大周边多个公交站由于地铁施工关系被临时取消
    把自行车停在马路中央的人
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题："你过得去小北门吗？"和"你在阳台上看得到楼下吗？"，你还听过哪些扎心的话？
`,
    itunesDuration: 2014,
    itunesKeywords: ['神奇海螺','四川大学','川大']
});

feed.item({
    title:  '8000万川大人看到这几句话都被扎心了！！！',
    description: `神奇海螺第六季第6期来了！本期你将会听到:
    
    我为什么要选择经济学院的同学作为伴侣？
    喜欢上了一个有男朋友的女生该怎么办？
    商业街的主要矛盾的转变
    男朋友为挽留感情竟然一直给我送口红...
    网曝川大某教授强制要求学生购买其主编的电子教材
    川大的电竞教材能让国人赢得英雄联盟的世界大赛吗？
    金拱门公司对贴合中国本土是不是有一些误解？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题："室友是学霸是怎样的体验?"
    `,
    url: config.baseUrl+'/59.mp3', // link to the item
    categories: ['Comedy'], // optional - array of item categories
    author: 'scuinfo和零壹广播剧社出品', // optional - defaults to feed author property
    date: 'Nov 5, 2017', // a format that js Date can parse.
    lat: 30.67, //optional latitude field for GeoRSS
    long: 104.06, //optional longitude field for GeoRSS
    itunesAuthor: 'scuinfo和零壹广播剧社出品',
    itunesExplicit: false,
    enclosure : {url:config.baseUrl+'/59.mp3', file:'./public/fm/59.mp3'}, // optional enclosure
    itunesSubtitle: '8000万川大人看到这几句话都被扎心了！！！',
    itunesSummary: `神奇海螺第六季第6期来了！本期你将会听到:
    
    我为什么要选择经济学院的同学作为伴侣？
    喜欢上了一个有男朋友的女生该怎么办？
    商业街的主要矛盾的转变
    男朋友为挽留感情竟然一直给我送口红...
    网曝川大某教授强制要求学生购买其主编的电子教材
    川大的电竞教材能让国人赢得英雄联盟的世界大赛吗？
    金拱门公司对贴合中国本土是不是有一些误解？
    
    神奇海螺团队成为网易云音乐第一批受邀电台开通了网易云音乐电台打赏功能，喜欢我们的电台可以直接在网易云音乐进行打赏，同时继续保留原支付宝赞助账户，您可以选择小额赞助我们团队，让我们能够持续做出更加精品的内容，
    感谢神奇海螺团队的幕后人员:
    台本:北阳，阿芽，维拉德
    后期:洛克
    ------
    下期话题："室友是学霸是怎样的体验?"
`,
    itunesDuration: 1576,
    itunesKeywords: ['扎心','四川大学','川大']
});
// cache the xml to send to clients
var xml = feed.xml();


fs.writeFile('./public/rss.xml',xml , function(e,r){
    if(e){
        console.log(e);
        return;
    }

    upyun.uploadFile('/podcast/rss.xml','./public/rss.xml', 'application/xml', true,function(e,r){
        console.log(e,r);
    })
});



// console.log(xml);
