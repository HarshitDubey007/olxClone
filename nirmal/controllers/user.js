const User = require('../models/user')
const jwt = require('jsonwebtoken')


exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: 'user already registered'
        })
        
        const { name, email, password, confirm_password, mobile } = req.body;

        if(password != confirm_password) {
            return res.status(400).json({msg: "password and confirm_password not match"})
        }
        const _user = new User({
            username: "1122233BRO",
            name,
            email, 
            password, 
            mobile, 
        })
        _user.save((error, data) => {
            console.log(_user)
            if(error){
                return res.status(400).json({
                    message: 'Somthing went wrong'
                })
            }
            if(data){
                return res.status(201).json({
                    message: 'user created successfully'
                })
            }
        })
    })
}


exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){
                console.log(req.body)
                    const token = jwt.sign({ _id: user._id }, "EERRTDDVFTEDDDD", { expiresIn: '1h'})
                    const { _id, username, email, mobileNo, gender } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, username, email, mobileNo, gender
                        }
                    })
            } else {
                return res.status(400).json({
                    message: 'Invalide username and password'
                })
            }
        } else {
            return res.status(400).json({
                message: 'Somthing went wrong'
            })
        }
    })
}



exports.sell = async(req, res) => {
    const Sell = require("../models/sell");
    try {
      const {
        categroy,
        brand,
        name,
        amount,
        // image,
        discription,
        location,
        contact,
      } = req.body;
    //   const buy = await Sell.findOne({ wallet_address: wallet_address });
      // console.log(req.body)
    //   const files = req.files;
    //   const url = await uploadImage(files.image, false, brand+'-'+name);
    //   console.log(files)
  console.log("req.user", req.user)
      const sell = await new Sell({
        user: req.user._id,
        categroy,
        brand,
        name,
        // image: url,
        amount,
        discription,
        location,
        contact,
      }).save((error, data) => {
        if (error) {
          console.log("saveError: ", error);
          return res.status(400).json({ message: "Somthing went wrong" });
        }
        if (data) {
          return res.status(200).json({ message: "success" });
        }
      });
    } catch (error) {
      console.log("CatchError: ", error);
      return res.status(400).json({ message: "Somthing went wrong" });
    }
  };
  
  
exports.getsell = async(req, res) => {
    const Sell = require("../models/sell");
    try{
        const query = req.query
      const buy = await Sell.find(query);
        return res.status(200).json({ Buy: buy})
    }catch(error) {
        return res.status(400).json({ message: "Somthing went wrong"})

    }
}

  async function uploadImage(data_stream, is_base64, file_name) {
      const mime = require('mime');
      const fs = require('fs');
      try {
          var decodedImg = is_base64?decodeBase64Image(data_stream):data_stream;
          var imageBuffer = decodedImg.data;
          var type = decodedImg.mimetype;
          var extension = mime.getExtension(type);
          const newname = file_name.split('/').join('');
          var fileName = newname+"-image." + extension;
          try {
              fs.writeFileSync("./img/images/" + fileName, imageBuffer, 'utf8');
          } catch (err) {
              console.log("Error: ", err.message)
              return undefined;
          }
          const file_path = `/images/${fileName}`;
          return file_path;
      } catch (error) {
          return undefined;
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  