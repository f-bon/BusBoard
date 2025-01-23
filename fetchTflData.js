import fetch from "node-fetch";
import dotenv from "dotenv";
import {getStopPoint} from "./userinput.js";

dotenv.config();

const api_key = process.env.API_KEY
let stopCode = await getStopPoint();

//let stopCode = '490008660N';
export const fetchTflArrivals = async (api_key) => {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals?api_key=${api_key}`);
    return response;
}

const response = await fetchTflArrivals(api_key);
let arrivalList = await response.json();
//console.log(arrivalList);

let sortedList = arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation);
let outputList = sortedList.slice(0,5);
//console.log(outputList);
//let testList = {'busno':'a','destination':5,'route':'sdf'};
let displayOutput = (outputList) => {

    let displayObject = {
        'Destination':outputList[0].destinationName,
        'Route':outputList[0].towards,
        'Arriving in (mins)': Math.floor(outputList[0].timeToStation/60)
    };


    //Display output
    for (let property in displayObject) {
        console.log(`${property} : ${displayObject[property]}`);
    }
};
displayOutput(outputList);  

/*display times (){
    arrival time : outputList.arrial 
    destination: ouutputlist. dest
}

outpustlist.forEach(display times)*/
