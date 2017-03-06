/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = 0;
    var maxLen = 0;
    var str = '';
    for(var i = 0;i < s.length;i++){
        str += s.charAt(i);
        len++;
        if(str.indexOf(s.charAt(i)) != (len-1)){
            str = str.substr(str.indexOf(s.charAt(i))+1, len-str.indexOf(s.charAt(i)));
        }
        maxLen = maxLen>len?maxLen:len;
    }
    return maxLen;
};