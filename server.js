var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
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

            },
    'article-two':{ 
            title: "Article-Two:Aleyamma",
            heading: "Article-Two",
            date: "5-NOV-2016",
            content:`<p> hii!!Welcome to article-Two. Please wait..
           <n> i am julie </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           </p>
            <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
    
            <p>   hows your day?? </p>`  },
    'article-three':{
            title: "Article-Three:Aleyamma",
            heading: "Article-Three",
            date: "25-sep-2016",
            content:`<p> hii!!Welcome to article-Three. Please wait..
           <n> i am julie </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
           </p>
            <n>nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.nice to see you.
           </n>
    
            <p>   hows your day?? </p>`}
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

var counter=0
app.get('/', function (req, res) {
    counter=counter+1;
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.tostring());
});


app.get('/:articleName',function(req,res)
{
 // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 var articleName=req.params.articleName
  res.send(createTemplate(articles[articleName]));
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
