import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE

router.put("/:id", verifyAdmin, updateHotel);

//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL

router.get("/", getAllHotels);

router.get("/countByCity", countByCity);

router.get("/countbyType", countByType);


export default router