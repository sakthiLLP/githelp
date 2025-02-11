import dotenv from 'dotenv';
dotenv.config();

interface Config {
  port: number;
  supabaseUrl: string;
  superbaseKey: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  supabaseUrl: process.env.SUPABASE_URL || "",
  superbaseKey: process.env.SUPABASE_KEY || "",
  
};

export default config;







