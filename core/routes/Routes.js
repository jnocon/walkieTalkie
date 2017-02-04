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
    .get(ResourcesCtrl.resourcesGetAll);

  router
    .route('/saveResource')
    .post(ResourcesCtrl.resourcesAddOne);

module.exports = router;
