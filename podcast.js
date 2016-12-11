var Podcast = require('podcast');
var UPYUN = require('upyun');
var fs = require('fs');
var upyun = new UPYUN('scuinfo', 'dsgygb', 'www.scuweb.com');
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
    copyright: '2015 scuinfo',
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
