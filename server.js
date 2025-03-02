
import app from './app.js'
import ConnectionToDB from "./config/dbConnection.js";

import { config } from "dotenv";
config();  // 

const PORT = process.env.PORT || 5500




app.listen(PORT, async () => {
  await ConnectionToDB()
  console.log('App is running at :' + PORT)
})