/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str = '',
        len = 0,
        maxLen = 0;
    for(let i = 0;i < s.length;i++){
      str += s.charAt(i);
      len++;
      if(str.indexOf(s.charAt(i)) != len - 1){
        let firstOccurence = str.indexOf(s.charAt(i));
        str = str.substr(firstOccurence + 1, len - firstOccurence);
        len = str.length;
      }
      maxLen = maxLen > len ? maxLen : len;
    }
    return maxLen;
};
