var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0 ; i-- ){
        digits[i]++
        digits[i] = digits[i] % 10
        if(digits[i]){
            return digits
        }
    }
    const result = new Array(digits.length+1).fill(0)
    result[0] = 1
    return result
};
console.log(plusOne([6,9,9,9]))