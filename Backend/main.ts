import mongoose from 'mongoose';
import connection from "./dbConnection";
import express from 'express';
import router from './routes';

const cors = require('cors');


const app = express();


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(cors());
const main = async () => {
  try {
     await connection();
   
   app.use(router);


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
    
  } catch (error) {
    console.error('Error reading the CSV file:', error);
  }
};
main();

