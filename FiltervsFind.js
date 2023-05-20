// The filter() method returns the matched values in an array from the collection. 
//It will check all values in the collection and return the matched values in an array.

arr=[4,8,19,30]
const arr2 =arr.filter(item=>{
    let f=item>4
    return(f)
})
console.log("Filter Result "+arr2)
// output:  Filter Result 8,19,30




//The find() method returns the first value that matches from the collection. 
//Once it matches the value in findings, it will not check the remaining values in the array collection.
const arr3 =arr.find(item=>{
    let f=item>4
    return(f)
})
console.log("Find Result "+arr3)
//output:  Find Result 8