var express = require('express');

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  var products = [
    {

      name:'Iphone',
      category:"mobile",
      desc :"This is awsome",
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"

    },
    {

      name:'Iphone',
      category:"mobile",
      desc :"This is awsome",
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"

    },
    {

      name:'Iphone',
      category:"mobile",
      desc :"This is awsome",
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"

    },
    {

      name:'Iphone',
      category:"mobile",
      desc :"This is awsome",
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"

    },
    {

      name:'Iphone',
      category:"mobile",
      desc :"This is awsome",
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"

    }
  ]
  res.status(200)
  res.render('index', { products ,admin:false});
});


module.exports = router;
