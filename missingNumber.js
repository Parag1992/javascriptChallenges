let missingNumber = () =>{
    let arr = [3, 7, 1, 2, 8, 4, 5,6,10]
    let newArr = arr.sort((a,b) => a - b)
    let incr = 1
    let num= newArr.find((ele) =>{
        if(incr !== ele)
        {
            return true
        }
        incr++
       
    })
    return num -1
}
console.log("Missing number is ",missingNumber());