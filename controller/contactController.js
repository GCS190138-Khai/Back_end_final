import { ContactModel } from "../model/contact.js"

export const createContact= async (req,res)=>{
  try {
      const newContact = req.body
   
      const contact = new ContactModel(newContact)
      await contact.save()

      return res.status(200).json({"message":"success",contact})
  } catch (error) {
      return res.status(500).json({error:error})
  }
}

export const getAllContactAdmin = async (req,res)=>{
  try {
 
      const contact = await ContactModel.find().sort({createdAt: -1})
 

      return res.status(200).json(contact)
  } catch (error) {
      return res.status(500).json({error:error})
  }
}