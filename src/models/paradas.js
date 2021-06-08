import { Schema, model } from "mongoose";

const paradaSchema = new Schema({
  idParadas: Schema.Types.ObjectId,
  lat: Number,
  lng: Number,
  name: String,
  state: Boolean,
  address: String,
  startDate: Number,
  endDate: Number,
});

export default model("Parada", paradaSchema);
