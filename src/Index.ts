import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex'

dotenv.config();

export const connection = knex({  // Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})
const app: Express = express();
app.use(express.json());
app.use(cors())


// http dos endpoints aqui exemplo 

// app.get("/nome", getAllUsers);



// ------------------------------------------------------------------ CÓDIGO SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});