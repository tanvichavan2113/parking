const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      vehicle: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      conpassword: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      tokens:[
        {
          token:{
            type: String,
            required: true,
          }
        }
      ]
})


UserSchema.pre('save', async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
    this.conpassword = await bcrypt.hash(this.conpassword, 12);
  }
  console.log("password hashed");
  next();
})

UserSchema.methods.generateAuthToken=async function(){
  try{
      let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
      this.tokens=this.tokens.concat({token:token});
      await this.save();
      return token;
  }
  catch(err){
      console.log(err);
  }
}

const User = mongoose.model('USER', UserSchema);

module.exports = User;