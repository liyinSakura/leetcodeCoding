var isPalindrome = function(s) {
    if(!s.length) return true
    let strArr = s.split('')
    let re =  /^[0-9a-zA-Z]*$/;
    const res = strArr.filter((item)=>{return re.test(item)&&item})
    let resStr = res.join('').toLocaleLowerCase()
    if(resStr === resStr.split('').reverse().join('')){
        return true
    } else {
        return false
    }

};
let str = 'A man, a plan, a canal: Panamaq'
console.log('====>',isPalindrome(str))

// 双指针法,别人写的
var isPalindrome1 = function(s) {
    str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let l = 0, r = str.length - 1
    while (l < r) {
        if (str[l]!==str[r]) {
            return false
        }
        l++
        r--
    }
    return true
};