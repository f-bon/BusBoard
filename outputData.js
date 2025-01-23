
export let outputData = (arrivalList) =>{
     //Display Bus Times - Part 1
     displayTflArrivals(arrivalList);

     //Display Bus Stops - Part 2
    // displayTflBusStops(arrivalList);

   
}

//Part 1 - Displays the first 5 buses to arrive along with routes,destination and time in minutes
let displayTflArrivals = (arrivalList) => {
    //sort the data and get the first five entries
    let outputList = (arrivalList.sort((a,b)=> a.timeToStation - b.timeToStation)).slice(0,5);
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
};

//Part 1 - Displays the first 5 buses to arrive along with routes,destination and time in minutes
let displayTflBusStops = (outputList) => {
}   