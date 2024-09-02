import mongoose, { Schema } from 'mongoose'
import { JsonWebTokenError } from 'jsonwebtoken';
import bycrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname:
    {
        type: String,
        require: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloundinary Service
        require: true,
    },
    coverImage:
    {
        type: String,
        default: ''
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken: {
        type: String,
        default: ''
    },
},
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (next) {
    if (!this.isModerified('password')) {
        return next();
    };
    this.password = await bycrypt.hash(this.password, 12);
    next();

});

userSchema.method.isPasswordCorrect = async function (password) {
    return await bycrypt.compare(password, this.password);
}

userSchema.method.generateAccessToken = function () {
    jwd.json(
        {
            id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    );
}
userSchema.method.generateRefreshToken = function () { 
    jwd.json(
        {
            id: this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        }
    );
}

export const User = mongoose.model('User', userSchema);