const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectionURL = "mongodb://tejjain:1234@cluster0-shard-00-00-x7f5n.mongodb.net:27017,cluster0-shard-00-01-x7f5n.mongodb.net:27017,cluster0-shard-00-02-x7f5n.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    gender: {
        type: String,
        trim: true,
        lowercase: true,
    },
    name: {
        first: {
            type: String,
            trim: true,
            lowercase: true,
        },
        last: {
            type: String,
            trim: true,
            lowercase: true,
        },
    },
    location: {
        street: {
            number: {
                type: String,
            },
            name: {
                type: String,
            }
        },
        city: {
            type: String,
        },

        state: {
            type: String,
        },

        postcode: {
            type: String,
        },

    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    dob: {
        date: {
            type: String
        },
        age: {
            type: Number
        }
    },
    registered: {
        date: {
            type: String
        },
        age: {
            type: Number
        }
    },
    phone: {
        type: String,
        trim: true,
        lowercase: true,
    },
    cell: {
        type: String,
        trim: true,
        lowercase: true,
    },
    user_id: {
        name: {
            type: String,
            trim: true,
            lowercase: true,
        },

        value: {
            type: String,
            trim: true,
            lowercase: true,
        },
    },
    nat: {
        type: String,
        trim: true,
        lowercase: true,
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;

