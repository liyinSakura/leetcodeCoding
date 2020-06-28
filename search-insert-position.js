var searchInsert = function(nums, target) {
    let l = 0 , r = nums.length -1

    if(target>nums[r]){
        return r + 1
    } else if (nums.length === 0) {
        return 0;
    }
    while (l<r){
        let mid = (l + r)>>>1
        if(target>nums[mid]){
            l = mid +1
        } else {
            r = mid
        }
    }
    return l
};
console.log(searchInsert( [1,3,5,6], 2))