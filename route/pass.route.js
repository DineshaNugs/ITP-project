const express = require("express");
const router = express.Router();

const {
    createPass,
    deletePass,
    getPassById,
    getPass,
    updatePass
} = require("../controller/Pass.controller");

//@route  POST api/Pass
//@desc   add Pass record
router.post("/add", createPass);

//@route  GET api/Pass
//@desc   get Pass by Id
router.get("/:id", getPassById);

//@route  DELETE api/Pass
//@desc   delete Pass
router.delete("/:id", deletePass);

//@route  GET api/Pass/all
//@desc   get all Pass
router.get("/", getPass);

//@route  PUT api/Pass
//@desc   update Pass record
router.put("/:id", updatePass);

module.exports = router;