var removeDuplicates = function(nums) {
    var j = 0;
    var n = nums.length;
    for(let i = 1;i<n;i++){
        if(nums[i]!=nums[i-1]){
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))