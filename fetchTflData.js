import fetch from "node-fetch";
import dotenv from "dotenv";
import {getStopPoint} from "./userinput.js";
import {outputData} from "./outputData.js";

dotenv.config();
const api_key = process.env.API_KEY

//let stopCode = '490008660N';
//Part 1 - Make API call to get data based on stop code
export const fetchTflArrivals = async (api_key) => {
    let stopCode = await getStopPoint();
    let response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals?api_key=${api_key}`);
    let arrivalList = await response.json();    
    outputData(arrivalList);  
}

//Part 2
export const fetchTflBusStops = async () =>{

}



   
   



