let express = require('express');
let router = express.Router();

let JobsCtrl = require('../controllers/JobsController.js')


router
  .route('/jobs')
  .get(JobsCtrl.jobsGetAll);


module.exports = router;
