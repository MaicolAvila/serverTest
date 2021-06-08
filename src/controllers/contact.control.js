import { ObjectID, ObjectId } from "bson";
import { Schema } from "mongoose";
import Contact from "../models/contact";

export const createContact = async (req, res) => {
  const {
    nombre,
    telefono,
    asunto,
    solicitud,
    email,
    empresa,
    medio,
    state,
  } = req.body;
  try {
    const newContact = new Contact({
      nombre,
      telefono,
      asunto,
      solicitud,
      email,
      empresa,
      medio,
      state,
    });

    const contactSaved = await newContact.save();
    console.log(req.body);
    res.status(201).json(contactSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
