import {Request, Response } from 'express';
import selectStudentById from '../data/selectStudentById';


export default async function getStudentById(
    req:Request,
    res:Response
)
    {
        try{
            //validar entradas da requisição //nao precisa
            //consultar o banco de dados
           const student =req.params.id
          // const age = req.params.bday 
           
           const myage = await selectStudentById (student)


            if (!student){
                res.status(400).send({
                    message:"Estudante não encontrado"
                })
            }
            res.status(200).send({
               student:myage
              
            })
        //validar saidas do banco
        //responder a requisição
               
    }catch (error){
        res.status(400).send({
            messsage:error.message || error.sqlMessage //se for um erro comum ele mostra a 1 msg e se for do sql ele mostra a 2
        })
    }
    
    }