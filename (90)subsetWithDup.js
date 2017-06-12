/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var results, len, subSets;

function subsetsHelper(nums, startIndex){
    var lastRecursion = subSets.map((item) => item);
    results.push(lastRecursion);

    for(let i = startIndex; i < len; i++){
        if(i !== 0 && nums[i] == nums[i-1] && i > startIndex){
            continue;
        }
        subSets.push(nums[i]);
        subsetsHelper(nums, i+1);
        subSets.pop();
    }
}
var subsetsWithDup = function(nums) {
    results = [],
    len = nums.length,
    subSets = [];
    
    if(nums === null || nums.length === 0){
        return results;
    } 
    
    nums = nums.sort((a,b) => a-b);
    
    subsetsHelper(nums, 0);
    
    return results;
};
