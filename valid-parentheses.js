var isValid = function(s) {
    const len = s.length
    if(len%2){
        return false
    }
    const arr = s.split('')
    const tempArr = []
    for(let i=0;i<len;i++){
        switch (arr[i]) {
            case '(':

                tempArr.push(arr[i]);
                break;


            case '[':

                tempArr.push(arr[i]);
                break;


            case '{':
                tempArr.push(arr[i]);
                break;

            case '}':
                if (tempArr.pop() !== "{") return false
                break;

            case ']':
                if (tempArr.pop() !== "[") return false
                break;

            case ')':
                if (tempArr.pop() !== "(") return false
                break;

            default:
                return false
        }

    }
    return !tempArr.length
};
console.log(isValid('()'))