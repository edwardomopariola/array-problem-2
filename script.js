/* Define a function that takes in an array of elements and joins them together into a string separated by a comma 
   with a space after the comma.
*/

 let carsArr = ["bmw", "lexus", "nissan","toyota", "mercedes benz"]; // Array of cars with a strings inside of it.
 
function stringArray(vehicle) {
    let carsArr = ["bmw", "lexus", "nissan","toyota", "mercedes benz"];
    for(let i = 0; i < carsArr.length; i++){ // lopping through the carsArray
        return vehicle.join(", ");
    };
};

 console.log(stringArray(carsArr));


