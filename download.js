let url = 'http://101.64.176.139:92/cnzz_code/2008-03/11/youbian.rar'

var request = require('request');
var fs = require('fs');
 
var img_src = url; //获取图片的url
        //采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err);
            }
        });
         
var img_filename = 'youbian.rar';  
request(img_src).pipe(fs.createWriteStream('./'+ img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。