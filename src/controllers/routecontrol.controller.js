import { ObjectID, ObjectId } from "bson";
import { Schema } from "mongoose";
import Parada from "../models/paradas";

export const createParada = async (req, res) => {
  const { lat, lng, name, state, address, startDate, endDate } = req.body;
  const newStartDate = Date.parse(startDate);
  const newEndDate = Date.parse(endDate);
  try {
    const newParada = new Parada({
      lat,
      lng,
      name,
      state,
      address,
      startDate,
      endDate,
    });

    const paradaSaved = await newParada.save();
    console.log(req.body);
    console.log(newStartDate);
    res.status(201).json(paradaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const createManyStops = async (req, res) => {
  const { stops } = req.body;
  console.log(req.body);
  stops.map(async (item) => {
    const { lat, lng, name, state } = item;

    try {
      const newParada = new Parada({
        lat,
        lng,
        name,
        state,
        idParada: Schema.Types.ObjectId,
      });

      const paradaSaved = await newParada.save();
      console.log(req.body);
      res.status(201).json(paradaSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });
};

export const getParada = async (req, res) => {
  const paradas = await Parada.find();
  return res.json(paradas);
};

export const getParadaById = async (req, res) => {
  const { paradaId } = req.params;

  const parada = await Parada.findById(paradaId);
  res.status(200).json(parada);
};

export const updateParadaById = async (req, res) => {
  const updatedParada = await Parada.findByIdAndUpdate(
    req.params.paradaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedParada);
};
