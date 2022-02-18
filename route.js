'use strict'

const express = require("express")
const penggunaController = require('./authorization')
const router = new express.Router()

router.get("/getAll", penggunaController.getAll)
router.get("/getId/:id", penggunaController.getId)
router.post("/registrasi", penggunaController.registrasi)
router.post("/login", penggunaController.login)
// router.put("/update/:id", kelasController.update)
// router.delete("/delete/:id", kelasController.delete)

module.exports = router