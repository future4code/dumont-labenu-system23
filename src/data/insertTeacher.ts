
import { connection } from '../index';


export default async function insertTeacher(
    id:string,
    name:string,
    email:string,
    bday:Date,
    mission_id?:number
   
    ){
        await connection.insert(
            {
                id,
                name,
                email,
                bday,
                mission_id
              
                  
            }).into ('teacher')
    }
