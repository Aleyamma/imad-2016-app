var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
title: "Article-one:Aleyamma",
heading: "Article-one",
date: "25-sep-2016",
content:`<p> hii!!Welcome to article-one. Please wait..
           <n> i am julie </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           </p>
            <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
    
            <p>   hows your day?? </p>`

};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
           ${title}
        </title>
    <meta name="viewport" content="width-device-width,initial-scale-1"/>
    <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    <body>
        <div class="container">
           <div>
            <a href="/">Home</a> 
           </div> 
           <h3> ${heading}</h3>
           <h5> ${date} </h5>
${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/article-one',function(req,res)
{
 // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 res.send(createTemplate(articleone));
});
app.get('/article-two',function(req,res)
{
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res)
{
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
