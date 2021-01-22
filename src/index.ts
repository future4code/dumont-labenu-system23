//fazer os imports 

import express, {Express,Request,Response} from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import cors from 'cors'
import { AddressInfo } from "net"
import createStudent from './endpoints/createStudent'
import createTeacher from './endpoints/createTeacher'
import createMission from './endpoints/createMission'


//configurar dotenv
dotenv.config()

//configurar knex 
export const connection =knex({
    client:"mysql",
    connection:{
        user:process.env.DB_USER,
        host:process.env.DB_HOST,
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD,
        port:3306
    }
})
//configurar express
const app: Express = express();
app.use(express.json());
app.use(cors());

//primeiro endpoint de criar usuario //criar aluno - professor - turma
app.put('/student',createStudent)//esta recebendo 2 parametros-caminho'/' e função
//não esquecer de importar a função acima
app.put('/teacher',createTeacher)
//caminho para encontrar o user
app.put('/mission',createMission)

//SERVIDOR CONFIGURADO PARA INICIAR -- ABAIXO
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`PARABENS ESTA RODANDO NA PORTA http://localhost: ${address.port}`);// SE ELE INICIAR MOSTRA A MSG
    } else {
       console.error(`:( AFF DEU ERRO `);//SE DER ERRO MOSTRA ESTA MSG
    }
});