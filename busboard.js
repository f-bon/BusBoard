
import {fetchTflArrivals,fetchTflBusStops} from "./fetchTflData.js";

const BusBoard = async () => {
    //Fetch Bus Times - Part 1
   //await fetchTflArrivals();
    //Fetch Bus Stops - Part 2
    await fetchTflBusStops();

}

await BusBoard();
// 490008660N

