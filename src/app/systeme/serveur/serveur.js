// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// For start mongoDB from the Command Interpreter:
// "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"


// Database Script
// =============================================================================
/*

function createCollection(name, childs) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        insertDocuments(db, function () {
            findDocuments(db, function () {
                client.close();
            });
        });
    });

    const insertDocuments = function (db, callback) {
        // Get the documents collection
        const collection = db.collection(name);
        // Insert some documents
        collection.insertMany(childs, function (err, result) {
            assert.equal(err, null);
            callback(result);
        });
    }

    const findDocuments = function (db, callback) {
        // Get the documents collection
        const collection = db.collection(name);
        // Find some documents
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs)
            callback(docs);
        });
    }
}

(function () {
    createCollection('users', [{
        id: 0,
        type: "Dev",
        name: "itsadeki",
        email: "itsadeki@gmail.com",
        pass: "itsadeki"
    }]);
    createCollection('medias', [
        {
            id: 0,
            type: "img",
            name: "Inverness McKenzie",
            directory: "img",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample108.jpg",
            description: "The only skills I have the patience to learn are those that have no real application in life."
        }, {
            id: 1,
            type: "img",
            name: "Alan Fresco",
            directory: "img",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample100.jpg",
            description: "The real fun of living wisely is that you get to be smug about it."
        }, {
            id: 2,
            type: "img",
            name: "Indigo Violet",
            directory: "img",
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample101.jpg",
            description: "But Calvin is no kind and loving god! He's one of the old gods! He demands sacrifice! "
        }, {
            id: 3,
            type: "img",
            name: "Shiba Inu",
            directory: "img",
            img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
        }
    ]);
})();
*/
// =============================================================================

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    let message = 'server log: request sent to the server';
    console.log(message);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({
        message: 'server log: GET http://localhost:8080/api/'
    });
});

// more routes for our API will happen here

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("server log: GET http://localhost:8080/api/users");

            const db = client.db(dbName);
            const collection = db.collection('users');

            collection.find({}).toArray(function (err, docs) {
                assert.equal(err, null);

                res.json(docs);

                client.close();
            });
        });
    })

    // create a user (accessed at POST http://localhost:8080/api/users)
    .post(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("server log: POST http://localhost:8080/api/users");

            const db = client.db(dbName);
            const collection = db.collection('users');

            if (!req.body.name || !req.body.email || !req.body.pass) {
                    
                console.log("server log: POST fail for bad request");

                res.status(400);
                res.json(false);
            } else {

                let newUser = {
                    id: 0,
                    type: "user",
                    name: req.body.name,
                    email: req.body.email,
                    pass: req.body.pass
                }

                collection.find({}).toArray(function (err, docs) {
                    assert.equal(err, null);

                    newUser.id = docs.length;

                    collection.insertOne(newUser, function (err, result) {
                        assert.equal(err, null);
                        
                        res.json(true);

                        client.close();
                    });
                });
            }
        });
    });

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('users');
            const idUser = parseInt(req.params.user_id);

            console.log("server log: GET http://localhost:8080/api/users/"+idUser);

            collection.find({ 'id': idUser}).toArray(function (err, docs) {
                assert.equal(err, null);

                res.json(docs);

                client.close();
            });
        });
    })

    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('users');
            const updateIndex = parseInt(req.params.user_id);

            if (!req.body.type || !req.body.name || !req.body.email || !req.body.pass) {

                console.log("server log: PUT fail for bad request");

                res.status(400);
                res.json(false);
            } else {
                console.log("server log: PUT http://localhost:8080/api/users/:" + updateIndex);

                if (updateIndex === -1) {

                    res.status(404);
                    res.json(false);

                } else {

                    collection.updateOne(
                        { "id": updateIndex },
                        {
                            $set: {
                                "type": req.body.type,
                                "name": req.body.name,
                                "email": req.body.email,
                                "pass": req.body.pass
                            }
                        }, function (err, result) {
                            assert.equal(err, null);

                            res.json(true);

                            client.close();
                        }
                    );
                }
            }
        });
    })

    // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('users');
            const idDeletedUser = parseInt(req.params.user_id);

            console.log("server log: DELETE http://localhost:8080/api/users/" + idDeletedUser);

            collection.deleteOne({
                "id": idDeletedUser
            }, function (err, result) {
                assert.equal(err, null);

                res.json(true);

                client.close();
            }
            );
        });
    });

// on routes that end in /medias
// ----------------------------------------------------
router.route('/medias')

    // get all the medias (accessed at GET http://localhost:8080/api/medias)
    .get(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("server log: GET http://localhost:8080/api/medias");

            const db = client.db(dbName);
            const collection = db.collection('medias');

            collection.find({}).toArray(function (err, docs) {
                assert.equal(err, null);

                res.json(docs);

                client.close();
            });
        });
    })

    // create a media (accessed at POST http://localhost:8080/api/medias)
    .post(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("server log: POST http://localhost:8080/api/medias");

            const db = client.db(dbName);
            const collection = db.collection('medias');

            if (!req.body.id || !req.body.type || !req.body.name || !req.body.directory || !req.body.img || !req.body.description) {

                console.log("server log: POST fail for bad request");

                res.status(400);
                res.json(false);
            } else {

                let newUser = {
                    id: req.body.id,
                    type: req.body.type,
                    name: req.body.name,
                    directory: req.body.directory,
                    img: req.body.img,
                    description: req.body.description
                }

                collection.find({}).toArray(function (err, docs) {
                    assert.equal(err, null);

                    newUser.id = docs.length;

                    collection.insertOne(newUser, function (err, result) {
                        assert.equal(err, null);

                        res.json(true);

                        client.close();
                    });
                });
            }
        });
    });

// on routes that end in /medias/:media_id
// ----------------------------------------------------
router.route('/medias/:media_id')

    // get the media with that id (accessed at GET http://localhost:8080/api/medias/:user_id)
    .get(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('medias');
            const idMedia = parseInt(req.params.media_id);

            console.log("server log: GET http://localhost:8080/api/medias/" + idMedia);

            collection.find({
                    'id': idMedia
                }).toArray(function (err, docs) {
                assert.equal(err, null);

                res.json(docs);

                client.close();
            });
        });
    })

    // update the media with this id (accessed at PUT http://localhost:8080/api/medias/:media_id)
    .put(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('medias');
            const updateIndex = parseInt(req.params.media_id);

            if (!req.body.type || !req.body.name || !req.body.directory || !req.body.img || !req.body.description) {

                console.log("server log: PUT fail for bad request");

                res.status(400);
                res.json(false);
            } else {
                console.log("server log: PUT http://localhost:8080/api/medias/:" + updateIndex);

                if (updateIndex === -1) {

                    res.status(404);
                    res.json(false);

                } else {

                    collection.updateOne(
                        { "id": updateIndex },
                        {
                            $set: {
                                "type": req.body.type,
                                "name": req.body.name,
                                "directory": req.body.directory,
                                "img": req.body.img,
                                "description": req.body.description
                            }
                        }, function (err, result) {
                            assert.equal(err, null);

                            res.json(true);

                            client.close();
                        }
                    );
                }
            }
        });
    })

    // delete the media with this id (accessed at DELETE http://localhost:8080/api/medias/:media_id)
    .delete(function (req, res) {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('medias');
            const idDeletedMedia = parseInt(req.params.media_id);

            console.log("server log: DELETE http://localhost:8080/api/medias/" + idDeletedMedia);

            collection.deleteOne({
                "id": idDeletedMedia
            }, function (err, result) {
                assert.equal(err, null);

                res.json(true);

                client.close();
            }
            );
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server log: server = express; port = ' + port);