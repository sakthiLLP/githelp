// var shortUrl = require("node-url-shortener");
import axios from "axios";
import getShortUrl from "../utils/utils"


// export default class BaseService {
//     static async getShortUrl(body:any) {
//         if(!body.url){
//         shortUrl.short("https://codeportal.in", function (err:any, url:any) {
//             if (err) {
//                 console.log(err);
//                 return { data:null,error: err };
//             }
//             console.log(url);
//             return { data: url,error:null };
//         });
//     }
//     return {data:null,error:true}
      
//       }
// }


import { nanoid } from "nanoid";
import { supabase } from "../config/db";

// export default class BaseService {
//     static async getShortUrl(body: any) {
//         if (!body.url) {
//             return { data: null, error: "URL is required" };
//         }

//         const shortId = nanoid(8); // Generates a short unique ID
//         const shortUrl = `https://codeportal.in/${shortId}`;

//         return { data: shortUrl, error: null };
//     }
// }


export default class BaseService {
   static async getShort(){
    console.log(getShortUrl)
   }
}

