/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
   let result = [1];
   if(n >= 2){
     result[1] = 2;
   }
   for(let i = 2; i < n; i++){
     result[i] = result[i-1] + result[i-2];
   }
   return result[i-1];
 }
