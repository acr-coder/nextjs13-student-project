import mongoose from "mongoose";
import Student from "@/models/studentModel";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}



dbConnect()

export default async (req, res) => {
    const { id } = req.query;
    
    switch(req.method){
        case 'GET':
        try {
        const student = await Student.findById(id)

        res.status(200).json({ success: true, data: student })
    } catch (error) {
        res.status(400).json({ success: false });
    } 
    break;
    case 'PUT':
        try {
            
            const student = await Student.findOneAndUpdate(
                {_id:id},
                {...req.body}
            )
            res.status(200).json({success:true})
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break; 
      
    }
    
}