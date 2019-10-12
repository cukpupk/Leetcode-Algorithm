let arr = [1,2,[3,4,[5,6,0]],4,[3,7],0];
let res = [];
function bfs(){
    while(arr.length){
        let pop = arr.shift(1);
        if(Array.isArray(pop)){
            arr.push.apply(arr,pop);
        }
        else{
            res.push(pop);
        }
    }
    return res;
}