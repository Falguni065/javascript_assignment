
// This function will return the result of mind game.

function mindGame (num)
{
    if(typeof(num) !== "number")
    {
        return "Please enter a number";
    }
    let result;
    result = ((((num*3)+10)/2)-5);
    return result;

}

// If the length of provided string is even, the function will return "even", if the length of string is odd, the function will return "odd". 

function evenOdd (str)
{
    if(typeof(str) !== "string")
    {
        return "Please enter a string";
    }
    let length = str.length;
    if(length%2 === 0) {
        return "even";
    }
    else
    {
        return "odd";
    }
}


// If the difference between the number and 7 is less than 7, this function will return the result of subtraction. If the difference is greater than 7, the function will return the double of the number.

function isLGSeven(num) {
    if (typeof(num) !== "number")
    {
        return "Please enter a number";
    }
    let sub = num - 7;
    if (sub < 7) {
        return sub;
    }
    else {
        return num*2;
    }
}


// This function will return the number of negative integers in the input array.

function findingBadData(arr) {

    if(typeof(arr) !== "object")
    {
        return "Please enter an array of integer numbers";
    }

    let count = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;

}

// This function will return the number of diamonds.

function gemsToDiamond(num1, num2, num3)
{
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number")
    {
        return "Please enter 3 integer numbers"
    }
    let total = num1*21 + num2*32 + num3*43;
    if (total > 2000) {
        return (total-2000);
    }
    else
    {
        return total;
    }
}



// console.log(mindGame("hello"));
// console.log(evenOdd(13));
// console.log(isLGSeven("hey"));
// console.log(findingBadData("hello"));
// console.log(gemsToDiamond(1,1,4));
