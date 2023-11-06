import Hotel from "../models/Hotel.js";

//CREATE hotel
export const createHotel = async(req, res,next)=>{
    
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        next(err);
    }
}

//UPDATE hotel
export const updateHotel = async(req, res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedHotel);

    }catch(err){
        next(err);
    }
}

//DELETE hotel
export const deleteHotel = async(req, res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");

    }catch(err){
        next(err);
    }
}

//GET hotel
export const getHotel = async(req, res,next)=>{
    try{
        const hotel =  await Hotel.findById(req.params.id);
         res.status(200).json(hotel);
 
     }catch(err){
        next(err);
     }
}


//GET ALL hotels
export const getAllHotels = async(req, res,next)=>{
    try{
        const hotels =  await Hotel.find();
         res.status(200).json(hotels);
 
     }catch(err){
         next(err);
     }
}

//GET count by city
export const countByCity = async(req, res,next)=>{
    const cities = req.query.cities.split(",")  //get the city values, split each by ",", then put them into an array
    try{
        const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city:city})
        }))
        
        res.status(200).json(list);
 
     }catch(err){
         next(err);
     }
}