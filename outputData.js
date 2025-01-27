import {sortBusList ,sliceBusList} from './utils.js';
import { fetchTflArrivals } from './fetchTflData.js';

export let outputData = (busStopsList,outputParam) =>{
     //Display Bus Times - Part 1
    if (outputParam == 'TflArrivals'){
     displayTflArrivals(busStopsList);
    }
     //Display Bus Stops - Part 2
    else if (outputParam == 'TflBusStops'){
     displayTflBusStops(busStopsList);  
    }  
}

let displayOutput =  (outputList) =>{
    for (let i = 0; i< outputList.length; i++ ){
        let displayObject = {

            'Bus':i+1,
            'Bus number:' : outputList[i].lineId,
            'Destination':outputList[i].destinationName,
            'Route':outputList[i].towards,
            'Arriving in (mins)': Math.floor(outputList[i].timeToStation/60)
        };
         //Display output
        for (let property in displayObject) {
            console.log(`${property} : ${displayObject[property]}`);
        }
        console.log(`\n`);
    }
}



//Part 1 - Displays the first 5 buses to arrive along with routes,destination and time in minutes
let displayTflArrivals = (arrivalList) => {
    //sort the data according to timeToStation and get the first five entries
    //let outputList = (arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation)).slice(0,5);
    let outputList = sliceBusList(sortBusList(arrivalList,'TflArrivals'),5);
    displayOutput(outputList);
   
};

//Part 1 - Displays the first 5 buses to arrive along with routes,destination and time in minutes
let displayTflBusStops = (busStopsList) => {
     //sort the data according to distance and get the first two entries
    //let outputList = (arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation)).slice(0,5);
    let outputList = sliceBusList(sortBusList(busStopsList,'TflBusStops'),1);
    for(let num=0; num<outputList.length;num++){
        fetchTflArrivals(outputList[0].id);
    } 

}   