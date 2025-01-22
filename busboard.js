import fetch from "node-fetch";
import dotenv from "dotenv";

// ask what this means?
dotenv.config();

const api_key = process.env.API_KEY

//let stopCode = prompt ("Please enter a valid stop code");
let stopCode = '490008660N';
const fetchTfl = async (api_key) => {
   // const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals?api_key=${api_key}`);
   const response = await fetch(`https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals`);
    return response;
}

const response = await fetchTfl(api_key);
let arrivalList = await response.json();
// let testList = [
//     {'name':'a','age':5},
//     {'name':'b','age':3},
//     {'name':'c','age':4}
// ];
// let testVar = testList.sort((a,b) => a.age - b.age);
// console.log(testVar);
//console.log(arrivalList[0]);
let sortedList = arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation);
//console.log(sortedList);
//destinationName
//towards
//timeToStation
//lineId
let outputList = sortedList.slice(0,5);
console.log(outputList.length);
/*outputList.map((elem)=>{
    
      console.log("Below are the list of next 5 available buses:");  
      {Bus No:elem.lineId Destination:${elem.destinationName} Route:${elem.towards} Arriving in (mins):${Math.floor(elem.timeToStation/60)})`);
     } );
});*/
let outputString = "";
for(let j=0;j<outputList.length;j++){
    outputString = outputString.concat(`Bus No:elem.lineId Destination:${elem.destinationName} Route:${elem.towards} Arriving in (mins):${Math.floor(elem.timeToStation/60)})`)
} 
/*const responseExample = {
    status: 200,
    json: async () => {
        return {
            infoAboutBuses: [
                {bus1Name: '123'}
            ]
        }
    }
}

[1,2,3].map((num) => ({numName: num})) [{numName: 1, numName: 2,}] 
[3,1,2].sort()*/
