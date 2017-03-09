/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sArray = s.split(' '),l = sArray.length;
    sArray.forEach(function(segment){
        if(/^$|\s+/.test(segment)){
          l--;  
        } 
    });
    return l;
};
