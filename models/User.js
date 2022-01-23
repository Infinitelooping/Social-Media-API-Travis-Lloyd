const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


// create the User model using the UserSchema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// export the User model
module.exports = User;