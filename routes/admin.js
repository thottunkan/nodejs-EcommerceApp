var express = require('express');
var productHelper = require("../helpers/product-helpers")
var router = express.Router();

/* GET users listing. */
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

    }];
  res.render('admin/view-products',{ products,admin:true})
});

router.get("/add-products",(req,res)=>{
  res.status(200)
  res.render("admin/add-product",{admin:true});
  
})

router.post("/add-products", (req,res)=>{
  console.log(req.body)
  let image = req.files.image;
  console.log(req.files.image)//image is the name of the field
  
  productHelper.addProduct(req.body,(productId) =>{
    image.mv('./public/product-images/'+productId+'.jpg',(err,done)=>{
      if (!err) {
        res.render('admin/add-product')
        console.log("product added")
      } else {
        console.log(err)
      }
    })
    
  })
  
})

module.exports = router;
