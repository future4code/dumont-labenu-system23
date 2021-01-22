import {Request, Response } from 'express';
import insertStudent from '../data/insertStudent'


export default async function createStudent(
    req:Request,
    res:Response
)
    {
        try{


          
            //validar entradas da requisição
if (
    !req.body.name||
    !req.body.email||
    !req.body.bday
 
){
    //se algum campo acima estiver faltando ele mostra a msg abaixo
    res
    .status(400)
    .send('Preencha os campos "name,"email","data de nascimento" e "hobby"')
}
            //consultar o banco de dados
const id:string = Date.now()+ Math.random().toString()
            
await insertStudent(
                 id,
                req.body.name,
                req.body.email,
                req.body.bday,
            
            )

            //validar saidas do banco
           

            //responder a requisição
            res
            .status(200)
            .send('Estudante criado com sucesso')
    
    }catch (error){
        res.status(400).send({
            messsage:error.message || error.sqlMessage //se for um erro comum ele mostra a 1 msg e se for do sql ele mostra a 2
        })
    }
    
    }