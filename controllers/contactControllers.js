const Conatct = require("../models/contactModel")
const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
// @access private
const getALLContact =asyncHandler( async (req,res)=>{
    const data = await Conatct.find({user_id: req.user.id});
    res.status(200).json(data);
})

//@desc Get individual contacts
//@route GET /api/contacts/:id
// @access private
const getContact = asyncHandler( async (req, res) =>{
    const contact = await Conatct.findById(req.params.id);
    if(!contact) 
    {
        res.status(404);
        throw new Error("Contact does not exist");
    }
    res.status(200).json(contact)
}
)
//@desc create new contact
//@route POST /api/contacts
// @access private
const createContact = asyncHandler (async (req, res) =>{
    console.log(req.body);
    const {name, Email, Phone}= req.body;
    if(!name || !Email || !Phone)
    {
        res.status(400);
        throw new Error("All the fields are mandatory !")
    }
    const contact = await Conatct.create({
        name,
        Email,
        Phone,
        user_id: req.user.id,
    })
    res.status(201).json(contact)
})

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler( async (req, res) => {
    const contact = await Conatct.findById(req.params.id);
    if(!contact) 
    {
        res.status(404);
        throw new Error("Contact does not exist");
    }

    // check the valid user or not
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user don't have permission to update contact")
    }
    const updateContacted = await Conatct.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    ); 
    res.status(200).send(updateContacted)
}
)

//@desc delete the contacts
//@route DELETE /api/contacts/:id
// @access private
const deleteContact =  asyncHandler (async (req, res) =>{
    const contact = await Conatct.findById(req.params.id);
    if(!contact) 
    {
        res.status(404);
        throw new Error("Contact does not exist");
    }

    // check the valid user or not
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user don't have permission to delete contact")
    }

    await Conatct.deleteOne({_id: req.params.id});
    res.status(200).json(contact)
}
)
module.exports = {getContact, updateContact, deleteContact, getALLContact, createContact};