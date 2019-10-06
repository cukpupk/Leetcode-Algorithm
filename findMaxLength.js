/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max=0;
    let sum=0;
    let map = new Map();
    map.set(0,-1);
    for(i=0;i<nums.length;i++){
        sum+=nums[i]==1? 1:-1;
        if(map.get(sum)!= undefined){
            max = Math.max(max,i-map.get(sum));
        }else{
            map.set(sum,i);
        }
    }
    return max;
};