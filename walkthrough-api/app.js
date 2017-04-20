var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
const bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

app.get('/:game/:dungeon', ({ params: {game, dungeon} }, res, next) => {
  console.log("game", game)
  request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, function (error, response, html) {
        var walkthrough;
        var $ = cheerio.load(html);
     if(!error){
        $('div.walkthrough p').filter(function(){
        var data = $(this);
        walkthrough = data.text();
        console.log(walkthrough)
        var json = { walkthrough : walkthrough };
        res.status(200).json(json)
      })
    }
  })
})

app.listen(8080)
