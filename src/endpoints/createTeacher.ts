import {Request, Response } from 'express';
import insertTeacher from '../data/insertTeacher';

export default async function createTeacher(
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
    .send('Preencha os campos "name,"email","data de nascimento"')
}
            //consultar o banco de dados
const id:string = Date.now()+ Math.random().toString()
            
await insertTeacher(
                 id,
                req.body.name,
                req.body.email,
                req.body.bday,
            
            )

            //validar saidas do banco
           

            //responder a requisição
            res
            .status(200)
            .send('Professor criado com sucesso')
    
    }catch (error){
        res.status(400).send({
            messsage:error.message || error.sqlMessage //se for um erro comum ele mostra a 1 msg e se for do sql ele mostra a 2
        })
    }
    
    }