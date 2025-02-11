import axios from "axios";


export default class BaseService {
    
    static async getShortUrl(param:any) {
    
     try {
       const response = await axios.get(`https://tinyurl.com/api-create.php?url=${param}`);
       return {data:response.data,error:null}
     } catch (error) {
        return {data:null,error:error}
     }
  
 
   }
 
 
 }
 
 
  