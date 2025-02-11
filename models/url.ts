import { timeStamp } from "console";

const supabase = require("supabase");

const urlschema = new supabase.schema(
    {
        shortId:{
            type:String,
            required:true,
            unique:true
        },
        redirectURL:{
            type:String,
            required:true
        },
        visitHistory: [{timeStamp:{type:Number}}],
    },
    {timestamps:true}
);

const URL = supabase.model("URL",urlschema);

module.exports=URL;

