let arr = [1,2,[3,4,[5,6,0]],4,[3,7],0];
let res = [];
function dfs(){
    res = arr.flat(Infinity);
    return res;
}
