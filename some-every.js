///Some................
//....................
//........................

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains
 at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

let hereIsTest = doubleValuesxyz(10,20,30)
console.log(hereIsTest)

function doubleValuesxyz(num1, num2, num3) {
    let hereIsTestAlpha = num1 + num2
    console.log(hereIsTestAlpha)
    return hereIsTestAlpha
}

function hasOddNumber(arr){
    console.log("this is orignial array for ex 1 " + arr)
    return arr.some(function(val){
        
        console.log(val + " is a val")
        if(val %2 !==0){
            console.log("true there is an odd number")
        }
        console.log("false there is an even number")
      return val % 2 !== 0;
      
    })
  }
/*
Write a function called hasAZero which accepts a number and returns true if that number
 contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    console.log("this is orignial array for ex 2 " + num)
    return num.toString().split('').some(function(val){
        //console.log(val + " is a val")
        if(val === '0'){
        console.log("true there is a 0")
        }
        console.log("false there is no 0")
      return val === '0';
    })
    
  }
/*

//Every.......................
//.............................
//..............................
Write a function called hasOnlyOddNumbers which accepts an array and 
returns true if every single number in the array is odd.
 If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    console.log("this is orignial array for ex 3 " + arr)
    return arr.every(function(val){
            //console.log(val + " is a val")
            if(val %2 !==0){
                console.log("true all odd numbers")
                return val % 2 !== 0;
            }
            console.log("false there is an even number")
            return false;
      
    })
  }
/*
Write a function called hasNoDuplicates which accepts an array and 
returns true if there are no duplicate values 
(more than one element in the array that has the same value as another). 
If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/


    function hasNoDuplicates(arr){
        console.log("this is orignial array for ex 4 " + arr)
        return arr.every(function(val){
            console.log(val + " is a val")
            if (arr.indexOf(val) !== arr.lastIndexOf(val)){
                console.log("false there are duplicates")
                return arr.indexOf(val) === arr.lastIndexOf(val);
            };
            console.log("true there are no duplicates")
          return true;
        });
      }


/*
Write a function called hasCertainKey which accepts an array of objects and a key,
 and returns true if every single object in the array contains that key.
  Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, 
and returns true if every single object in the array contains that value for the specific key. 
Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }

