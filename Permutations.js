/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let number = [];
    helper(number, 0, nums.length-1,nums);
    return number;
    
};
function helper(number,count,len, nums){
    if(len===count){
        number.push(nums.slice());
    }else{
        for(let i = count; i<=len;i++){
            swap(nums,count,i);
            helper(number, count+1, len,nums);
             swap(nums,count,i);
        }
    }
}
function swap(arr,pos1,pos2){
    let temp = arr[pos1];
    arr[pos1]= arr[pos2];
    arr[pos2]= temp;
}