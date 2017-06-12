/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var results, subSets, len;
 
 function subsetsHelper(nums, startIndex){
   var lastRecursion = subSets.map((item) => item);
   results.push(lastRecursion);
   
   for(let i = startIndex, i < nums.lengths; i++){
     subSets.push(nums[i]);
     subsetsHelper(nums,i+1);
     subSets.pop();
   }
 }
 var subsets = function(nums){
     results = [],
     subSets = [],
     len = nums.length;
     
     if(nums === null || leng === 0){
         return results;
     }
     
     nums = nums.sort((a,b) => a-b));
     
     subsetsHelper(nums, 0);
     
     return results;
 }
