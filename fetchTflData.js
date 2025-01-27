import fetch from "node-fetch";
import dotenv from "dotenv";
import {getuserInput} from "./userinput.js";
import {outputData} from "./outputData.js";
import {fetchLatLon} from './utils.js';

dotenv.config();
const api_key = process.env.API_KEY

let getStopPointId = async() =>{
    let stopCode = await getuserInput('Stop Point Id');
    return stopCode;
}

//let stopCode = '490008660N';
//Part 1 - Make API call to get data based on stop code
export const fetchTflArrivals = async (stopCode) => {
   // let stopId = stopCode || await getStopPointId();
   let stopId;
   if(stopCode) {
    stopId = stopCode;
   }
   else{
    stopId = await getStopPointId();
    
   }
    let response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopId}/Arrivals?api_key=${api_key}`);
    let busStopsList = await response.json();  
    outputData(busStopsList,'TflArrivals');  
}



//Part 2
export const fetchTflBusStops = async () =>{
    let coordinates = await fetchLatLon();
    //{ latitude: 51.553935, longitude: -0.144754 }
    let stopTypes = 'NaptanPublicBusCoachTram';
    // london bridge - SE19BG
    // victoria - SW1W9TP
    let busStops = await fetch (`https://api.tfl.gov.uk/StopPoint/?lat=${coordinates.latitude}&lon=${coordinates.longitude}&stopTypes=${stopTypes}`);
    let busStopsList = await busStops.json();
    outputData(busStopsList.stopPoints,'TflBusStops'); 

}



   
   



