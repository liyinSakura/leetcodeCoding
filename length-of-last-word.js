var lengthOfLastWord = function(s) {
    if(!s || typeof s !== 'string'){
        return 0
    }
    const arr = s.split(' ').filter(i=>i.length>0)
    if(arr.length){
        return arr[arr.length-1].length
    }
    return 0
};
console.log(lengthOfLastWord('a '))