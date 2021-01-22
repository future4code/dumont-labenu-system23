import {Request, Response } from 'express';
import insertMission from '../data/insertMission'

export default async function createMission(
    req:Request,
    res:Response
)
    {
        try{
            //validar entradas da requisição
if (
    !req.body.name||
    !req.body.start_date||
    !req.body.end_date||
    !req.body.module
             
){
    //se algum campo acima estiver faltando ele mostra a msg abaixo
    res
    .status(400)
    .send('Preencha os campos "name,"data de inicio","data do término" e "módulo"')
}
            //consultar o banco de dados
const id:string = Date.now()+ Math.random().toString()
            
await insertMission(
                 id,
                req.body.name,
                req.body.start_date,
                req.body.end_date,
                req.body.module,
                req.body.user_id,
            )

            //validar saidas do banco
           

            //responder a requisição
            res
            .status(200)
            .send('Turma criada com sucesso')
    
    }catch (error){
        res.status(400).send({
            messsage:error.message || error.sqlMessage //se for um erro comum ele mostra a 1 msg e se for do sql ele mostra a 2
        })
    }
    
    }