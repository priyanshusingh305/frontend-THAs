```
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
```
function arraytostring(val)
{  
    console.log(val.join(","));
    console.log(val.join(","));
    console.log(val.join("+"));
}
arraytostring(["Red", "Green", "White", "Black"]);