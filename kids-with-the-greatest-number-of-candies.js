var kidsWithCandies = function(candies, extraCandies) {
    const maxInCandies = Math.max(...candies)
    const result = candies.map((i)=>{
        return i + extraCandies >= maxInCandies
    })
    return result
};
const candies = [12,1,12], extraCandies = 10
console.log(kidsWithCandies(candies, extraCandies))