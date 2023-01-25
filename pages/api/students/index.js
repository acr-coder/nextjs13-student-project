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
    const { method } = req;
    

    switch (method) {
        case 'GET':
            try {
                const students = await Student.find({}).sort({createtAt:-1});

                res.status(200).json({ success: true, data: students })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                //const student = await Student.create(req.body);
                const student = await Student.insertMany(req.body)
                res.status(201).json({ success: true, data: student })
            } catch (error) {
                res.status(400).json({ success: false, error });
            }            
            break;
        case 'DELETE':
            try {
                 const student = await Student.findByIdAndDelete(req.body.id);
                //const student = await Student.deleteMany({_id: { $in: req.body.objects}});
                res.status(201).json({ success: true, data: student })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        
        default:
            res.status(400).json({ success: false });
            break;
    }
}