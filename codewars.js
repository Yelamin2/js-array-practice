// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number=function(array){
    //your awesome code here
      let box=[];
    if( array ===[] || array ==={}){
      return [];
    }
    else {
      
      for(let i=0; i<array.length ; i++){
         box.push((i+1)+ ': ' + array[i]);
      }
      return box;
    }
  };
// class solution




// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
const arr = N => {

  const R=[];
  for(let i=0; i < N ; i++){
    
     R.push(i);
    
  }
 return R;

}

/// class solution
function arr(num){
  if(num === undefined){
    return[];
  }
  const result = [];
  for(let i=0; i<num; i++){
    result.push(i)
  }
  return result;
}

// more methods

function arr(num){
  return num === undefined ? [] : [...Array(num).keys()];
}

// that will check for condition of num is undefined and retur an empty array. When 
// use .key it will use a spred opperator and 

              



// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
function flyBy(lamps, drone){
  let maxLength = Math.min(drone.length, lamps.length)
  let passedLamps=[];
  for(let i=0; i< maxLength; i++){
    
    if(lamps[i]=='x'){
      passedLamps.push('o'); 
    }else {
      lamps[i] = 'x';
      passedLamps.push('x');
    }
  }
  passedLamps.push(lamps.slice(maxLength));
  lamps =passedLamps.join('');

  return lamps;
  
}


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let markstotal=0;
  for(let i=0; i< marks.length; i++){
    markstotal = markstotal+marks[i];
  }
  
  return Math.floor(markstotal/marks.length);
}




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

///from one on one

reverse=a=>a.map(a.pop,[...a])
