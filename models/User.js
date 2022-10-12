const { builtinModules } = require('module');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: ['/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/']
    },
    thoughts: [],
    friends: []
},
{
    toJSON: {
        getters: true
    }
});

UserSchema.virtual(friendCount).get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;