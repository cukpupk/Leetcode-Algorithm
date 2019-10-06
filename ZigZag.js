/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1)
        return s;
    let rows = new Array(numRows);
    rows.fill("");
    for(i=0;i<s.length;){
        for (let j = 0; j < numRows && i < s.length; j++) {
            rows[j] += s[i];
            i+=1;
        }
        for (let k = numRows - 2; k > 0 && i < s.length; k--) {
            rows[k] += s[i];
            i+=1;
        }
    }
    
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result = result.concat(rows[i]);
    }
    return result.join("");
};