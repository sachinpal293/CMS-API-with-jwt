const express = require('express');
const router = express.Router();
const {
    getContact,
    updateContact, 
    deleteContact, 
    getALLContact, 
    createContact
    } = require('../controllers/contactControllers');
const validToken = require('../middelware/validateTokenHandle');




router.use(validToken)
router.route("/").get(getALLContact).post(createContact)


router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;