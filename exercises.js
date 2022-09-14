// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


function myFunction(word, i){
    let filler = []; // create an empty array to fill with the repeated characters
    i= Math.floor(i);// turn any number to the first integer befor it
    for(let j=0; j<i; j++){
     filler.push(word);
    }
return filler;

};








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function revarray(array){ // define the function 
    let store = array.slice(); // use slice to keep original intact
    return store.reverse();
}










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function isfaly(array){
    let r = array.length;
    let notfals =[];

    for(let i = 0; i < r ; i++){

        if( Boolean(array[i]) ){

            notfals.push(array[i]);

        };
        
    };
    return notfals;
};








// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function dist(myArray){

}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


function arequal(array1, array2){
    const arr1sum={};
    const arr2sum={};
     if(array1.length===array2.length){
         
         for(let i=0; i<array1.length; i++){
             let arr1num = array1[i];
             let arr2num = array2[i];
             if(arr1sum[arr1num]==!undefined){
 
                 arr1sum[arr1num] += 1;
             }
             else {
                 arr1sum[arr1num]=1;
             }
             if(arr2sum[arr2num]==!undefined){
 
                 arr2sum[arr2num] += 1;
             }
             else {
                 arr2sum[arr2num]=1;
             }
 
             console.log(i);
 
             
         }
 
         console.log(arr1sum);
         console.log(arr2sum);
         
         
         for (const property in arr1sum){
        let Ar1 = 0;
        Ar1 += parseFloat(${property})* parseFloat(${arr1sum[property]});}

        for (const property in arr2sum){
            let Ar2 = 0;
            Ar2 += parseFloat(property)* parseFloat(arr2sum[property]);}

           console.log(Ar1, Ar2 ,'Arblock');
 
 
     }

    
      if(Ar1 == Ar2){
         return 'They are Equal';
 
     }
     else{
     return 'They are not Equal'
     }
 
     
 }








// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------


function arequal(array1, array2){
    const arr1sum={};
    const arr2sum={};
     if(array1.length===array2.length){
         
         for(let i=0; i<array1.length; i++){
             let arr1num = array1[i];
             let arr2num = array2[i];
             if(arr1sum[arr1num]==!undefined){
 
                 arr1sum[arr1num] += 1;
             }
             else {
                 arr1sum[arr1num]=1;
             }
             if(arr2sum[arr2num]==!undefined){
 
                 arr2sum[arr2num] += 1;
             }
             else {
                 arr2sum[arr2num]=1;
             }
 
             console.log(i);
 
             
         }
 
         console.log(arr1sum);
         console.log(arr2sum);
         
         
         for (const property in arr1sum){
        let Ar1 = 0;
        Ar1 += property*arr1sum[property];}

        for (const property in arr2sum){
            let Ar2 = 0;
            Ar2 += property*arr2sum[property];}
            
 
 
     }

     

        
     
      if(Ar1 == Ar2){
         return 'They are Equal';
 
 
     }
     else{
     return 'They are not Equal'
     }
 
 
     
 }







// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------


function arsplit(array, i){
    i = Math.floor(i);
    let j= array.length;
    if(j>i){
    return [array.slice(0,i), array.slice(i-j)];
    }
    return array;
}







// -----------------------------------------------
