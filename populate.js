import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db.js';
import Product from './model/product.js';
import data from './products.json' assert {type: "json"}


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        await Product.create(data)
        console.log("Populated");
        process.exit(0)
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

start()