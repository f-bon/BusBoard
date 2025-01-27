import {getuserInput} from "./userinput.js";
import fetch from "node-fetch";



export let fetchLatLon = async () => {
    let postCode =  await getuserInput('Post Code');
     //  api.postcodes.io/postcodes/NW51TL
    let postCodeUrl = await fetch (`http://api.postcodes.io/postcodes/${postCode}`);
    let latLongData = await postCodeUrl.json();
    let {latitude,longitude} = latLongData.result;
    return {latitude, longitude};
    
}


//sort the bus list
export let sortBusList = (busList,operation) => {
    let sortedList;
    console.log(`busList : ${busList}`);
    if (operation === 'TflArrivals') {
        //let outputList = (arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation)).slice(0,5);
         sortedList = (busList.sort( (a,b)=> a.timeToStation - b.timeToStation));
    }
    else if (operation === 'TflBusStops'){
        sortedList = (busList.sort((a,b)=> a.distance - b.distance));
    }
    // a[parameter] - b[parameter]
    return sortedList;
}

//slice the list
export let sliceBusList = (busList,sliceNo) =>{
    let slicedList = busList.slice(0,sliceNo);
    return slicedList;
}