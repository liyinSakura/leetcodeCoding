var isPalindrome = function(x) {
    return (x+'') === (x+'').split('').reverse().join('')&&x>=0
};
console.log(isPalindrome(2332))