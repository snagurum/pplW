// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const DATABASE_HOST = "192.168.1.14";

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://'+DATABASE_HOST+'/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const webSiteSchema = new mongoose.Schema({
  webSite: String,
  userName: String,
  password: String
});

// create mongoose model
const WebSite = mongoose.model('WebSite', webSiteSchema);


//_ GET api listing. _/
router.get('/api/', (req, res) => {
        res.send('api works');
});

//_ GET all webSites. _/
router.get('/api/sites', (req, res) => {
    console.log('getting sites..............................');
    WebSite.find({}, (err, webSites) => {
        console.log("webSites = ",webSites);
        if (err) res.status(500).send(error)
        res.status(200).json(webSites);
    });
});

//_ GET one webSite. _/
router.get('/api/site/:id', (req, res) => {
    console.log('getting site request by id'+req.param.id+'..............................');
    WebSite.findById(req.param.id, (err, webSite) => {
        if (err) res.status(500).send(error)
        res.status(200).json(webSite);
    });
});

//_ Create a webSite. _/
router.post('/api/site', (req, res) => {
    let webSite = new WebSite({
        webSite: req.body.webSite,
        userName: req.body.userName,
        password: req.body.password
    });
    console.log('creating site',webSite,'..............................');

    webSite.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'webSite created successfully'
        });
    });
});

module.exports = router;