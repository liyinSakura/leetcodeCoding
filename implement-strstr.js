var strStr = function(haystack, needle) {
    if(!needle){
        return 0
    }
    return  haystack.indexOf(needle)
};
console.log(strStr('hello','ll'))