const express = require('express');
const router  = express.Router();
const service = require("../services/service");

router.get("/", service.form);
router.post("/", service.postUser );
router.get("/get", service.getUsers);


module.exports = router;