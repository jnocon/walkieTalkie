let express = require('express');
let router = express.Router();

let JobsCtrl = require('../controllers/JobsController.js')
let ResourcesCtrl = require('../controllers/ResourcesController.js')

router
  .route('/jobs')
  .get(JobsCtrl.jobsGetAll);

router
  .route('/saveJob')
  .post(JobsCtrl.jobsAddOne);

  router
    .route('/resources')
    .get(JobsCtrl.resourcesGetAll);

  router
    .route('/saveResource')
    .post(JobsCtrl.resourcesAddOne);

module.exports = router;
