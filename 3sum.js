/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let number = [];
    for (i = 0 ; i<nums.length-2;i++){
        if(i===0 || (i>0 && nums[i]!=nums[i-1])){
            let sta = i+1;
            let end = nums.length-1;
            let sum = -nums[i]
            while(sta<end){                
                if(nums[sta]+nums[end]==sum){
                    let k = [nums[sta],nums[end],nums[i]];
                    number.push(k);
                    while(sta<end&&nums[sta]==nums[sta+1]){
                        sta+=1;
                    }
                    while(sta<end&&nums[end]==nums[end-1]){
                        end-=1;
                    }
                    sta+=1;
                    end-=1;
                }
                else if (nums[sta]+nums[end]<sum){
                    sta+=1;
                }
                else{
                    end-=1;
                }
                
            }
        }
            
    }
    return number;
    
};