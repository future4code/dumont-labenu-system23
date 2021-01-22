import { connection } from '../index';


export default async function insertStudent(
    id:string,
    name:string,
    email:string,
    bday: Date 
   
    ){
       

await connection.insert(
            {
                id,
                name,
                email,
                bday,
                  
            }).into ('student')
    }
