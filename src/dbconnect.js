const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://tejjain:1234@cluster0-shard-00-00-x7f5n.mongodb.net:27017,cluster0-shard-00-01-x7f5n.mongodb.net:27017,cluster0-shard-00-02-x7f5n.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

var _db;
module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(
      connectionURL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, client) {
        _db = client.db("test");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return _db;
  },
};
