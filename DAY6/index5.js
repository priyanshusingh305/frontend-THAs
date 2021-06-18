```
Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
```
function freq(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
         -arr.filter(v => v===b).length
    ).pop();
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(freq(arr1));