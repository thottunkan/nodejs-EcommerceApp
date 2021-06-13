var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const uri = "mongodb+srv://root:mongodb@cluster0.4sip9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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
  res.render('index', { products ,admin:false});
});

router.post('/submit',(req,res)=>{
  res.send("hai")
  console.log(req.body);
  MongoClient.connect(uri,(err,client)=>{
    console.log("connected to atlas")
    if (err) {
      console.log("connection failed")
    }
    else 
      client.db('ecom').collection('user').insertOne(req.body);
  })

})

module.exports = router;
