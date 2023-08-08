import dotenv from 'dotenv';

dotenv.config();

export const config = {

    port: process.env.PORT,    
    test: process.env.TEST,

}

export default config;