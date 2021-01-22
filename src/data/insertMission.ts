
import { connection } from '../index';

export default async function insertMission(
    id:string,
    name:string,
    start_date:Date,
    end_date:Date,
    module?:string,
    user_id?:string,
   
    ){
        await connection.insert(
            {
                id,
                name,
                start_date,
                end_date,
                module,
                user_id
                  
            }).into ('mission')
    }
