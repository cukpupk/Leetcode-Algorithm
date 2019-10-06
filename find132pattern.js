/**
 * @param {number[]} nums
 * @return {boolean}
 */
class Stack{
    constructor(){
        this.items=[];
    }
    push(element) { 
        this.items.push(element); 
    } 
    pop(){ 
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
    }
    peek() { 
    return this.items[this.items.length - 1]; 
    }
    isEmpty() {
        if(this.items.length==0)
            return true;
    } 
}
var find132pattern = function(nums) {
    if(nums.length<3)
        return false;
    var stack = new Stack();
    let min = [];
    min[0]=nums[0];
    for(i=1;i<nums.length;i++)
        min[i]= Math.min(min[i-1],nums[i]);
    for(j=nums.length-1;j>=0;j--){
            if(nums[j]>min[j]){
                while(!stack.isEmpty() &&stack.peek() <=min[j]){
                    stack.pop();
                }
                if(!stack.isEmpty() && stack.peek()<nums[j]){
                    return true;
                }
                stack.push(nums[j]);
            }
        }
        return false;
};