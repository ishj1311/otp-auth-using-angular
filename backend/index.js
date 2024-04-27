
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


function generateOtp(){
  return Math.floor(100000 + Math.random() * 900000).toString();
}

let generatedOtp = "";

app.post("/api/generate-otp" , (req,res) => {
    generatedOtp = generateOtp();
    res.json({
      success : true,
      otp: generatedOtp,
    });
});


app.post("/api/verify-otp", (req,res) => {
  console.log(req.body);
  const {otp} = req.body;
  if (otp === generatedOtp){
    res.json({
      success : true,
    });
    } else {
      res.json({
        success : false,
      });
    }
});


app.listen(port , () =>{
  console.log(`Server listening at http://localhost:${port}`);
})
