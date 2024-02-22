
import path from "path";
import dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

export interface ConfigIds {
    SERVICE_ID: string;
    TEMPLATE_ID: string
    PUBLIC_KEY: string;

}

export const getConfigIds = (): ConfigIds => {

    console.log(process.env.SERVICE_ID)
    return {
        SERVICE_ID: process.env.SERVICE_ID ? process.env.SERVICE_ID : '',
        TEMPLATE_ID: process.env.TEMPLATE_ID ? process.env.TEMPLATE_ID : '',
        PUBLIC_KEY: process.env.PUBLIC_KEY ? process.env.PUBLIC_KEY : ''
    }
}