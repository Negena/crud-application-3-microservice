const express = require('express');
const router  = express.Router();
const service = require("../services/service");

router.get("/", service.form);
router.post("/", service.postUser );
router.get("/get", service.getUsers);
router.get("/user/:id", service.getUser);
router.get("/upd/:id", service.updateUser);
router.post("/upda/:id",service.postUpdUser);
// router.delete("/del/:id", service.deleteUser);

module.exports = router;