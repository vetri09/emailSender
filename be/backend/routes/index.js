var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// POST
router.post('/forms', (req,res)=>{
  let data = req.body;
  let smptTransport = nodemailer.createTransport({
    service:"Gmail",
    port:465,
    auth:{
      user:"bcap123123@gmail.com",
      pass:"b@tc@p123"
    }
  });

  let mailOptions = {
    from:data.email,
    to:"bcap123123@gmail.com",
    subject:`Message from ${data.name}`,
    html:`
    <h3>Form details</h3>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message: ${data.message}</p>
    `
  };

  smptTransport.sendMail(mailOptions,(err,res)=>{
    if(err){
      console.log(err)
    }else{
      res.send("sucess")
    }
  });

  smptTransport.close();

})

module.exports = router;
