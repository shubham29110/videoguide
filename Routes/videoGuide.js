const express = require('express');
const router = express.Router();
const Controller = require('../Controller/vgController');
//const videoGuide = require('../Models/videoGuide');




/**
 * User HOME ROUTE
 */
router.post('/videoGuide', Controller.home)






module.exports = router;