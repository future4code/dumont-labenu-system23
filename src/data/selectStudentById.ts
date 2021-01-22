
import { connection } from '../index';


export default async function selectStudentById(id:string):Promise<any>
{

        const result = await connection .raw (`
        SELECT name,FLOOR (DATEDIFF(CURDATE(),bday)/365) AS age
        FROM student
        WHERE id = "${id}";
        `)

        return result [0] //retorna só o objeto
    }
