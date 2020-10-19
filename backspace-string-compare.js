var backspaceCompare = function(S, T) {
    if(S === T){
        return true
    }
    let SArr = S.split('')
    let TArr = T.split('')
    let Sstr = lastTxt(SArr),Tstr = lastTxt(TArr)
    return Sstr === Tstr
};
const lastTxt = arr => {
    let result = ''
    arr.map(item=>{
        if(item === '#'){
            if(result.length){
                result = result.substring(0,result.length-1)
            } else {
                result = ''
            }
        } else {
            result += item
        }
    })
    return result
}

backspaceCompare("a#c","b")