import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  nombre: String,
  telefono: Number,
  asunto: String,
  solicitud: String,
  email: String,
  empresa: String,
  medio: String,
  state: Boolean,
});

export default model("Contact", contactSchema);
