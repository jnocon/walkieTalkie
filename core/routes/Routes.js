let express = require('express');
let router = express.Router();

let JobsCtrl = require('../controllers/JobsController.js')


router
  .route('/jobs')
  .get(JobsCtrl.jobsGetAll);
// 
// router
//   .route('/jobs')
//   .post(JobsCtrl.jobsAddOne);


module.exports = router;
