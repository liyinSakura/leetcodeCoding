var romanToInt = function(s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    const spObj = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    } 
    let arr = s.split('')
    let len = arr.length
    let i = 0
    let result = 0
    while(i<len){
        if(i+1<len){
            if(obj[arr[i]]>=obj[arr[i+1]]){
                result += obj[arr[i]]
                i++
            }else{
                result += spObj[arr[i]+arr[i+1]]
                i=i+2
            }
        }else{
            result += obj[arr[i]]
            i++
        }
    }
    return result
};
console.log('-----',romanToInt("DXX"))