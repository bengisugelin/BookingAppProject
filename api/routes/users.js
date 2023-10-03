import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Check Authentication
router.get("/checkauthentication", verifyToken, (req, res, next)=>{

    res.send("You are logged in.")
});


//Check USer
router.get("/checkuser/:id", verifyUser, (req, res, next)=>{

    res.send("You are logged in  and you can delete your account")
});

//Check admin
router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{

    res.send("Hello admin, You are logged in  and you can delete your account")
});


//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getAllUsers);


export default router