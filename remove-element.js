var removeElement = function(nums, val) {
    var j = 0;
    var n = nums.length;
    for(let i = 0;i<n;i++){
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};
console.log(removeElement([3,2,2,3],3))