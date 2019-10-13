Array.prototype.filter = function(fn){
    let res = [];
    for(let item of fn){
        if(fn(item))
            res.push(item);
    }
    return res;
}


Array.prototype.map = function(fn){
    let res=[];
    for(let item of fn){
        res.push(fn(item));
    }
}

Array.prototype.reduce = function(fn,start){
    let res = [];
    let acc = 0;
    for(let item of fn){
        acc+=item;
    }
    res.push(acc+start);
    return res;
}

function debounce(fn,wait){
    var timer;
    return Function(){
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout({
            fn.apply(null,args);
        },wait);
    }
}
function throttle(fn,wait){
    let last = new Date();
    let timer;
    return function(){
        let now = new Date();
        let args = arguments;
        if(last&&now<last+wait){
            clearTimeout(fn);
            timer = setTimeout(function(){
                last = now;
                fn.apply(null,args);
            })
        }
        else{
            last=now;
            fn.apply(null,wait);
        }
    }
}
Function.prototype.bind = function(context) {
    let fn = this;
    let preArgs = [].slice.call(arguments,1);
	return function() {
		let currArgs = [].slice.call(arguments);
		let finalArgs = [].concat(preArgs,currArgs);
		return fn.apply(context,finalArgs);
	}
}

let input = [{
    Value: 'a',
    Time: 2000
},
{
  Value: ‘b’,
  Time: 1000
},
{
  Value: ‘c’,
  Time: 3000
},
...
}]
function printTask(list) {
    let time1 = new Date();
    function gettime() {
        let h = time1.getHours();
        let m = time1.getMinutes();
        let s = time1.getSeconds();
        checktime(h);
        checktime(m);
        checktime(s);
        return h+":"+m+":"+s;
     }
    function checktime(i) {
        if(i<10){
            i = "0"+i;
        }
        return i;
    }
    let index = 0;
    
    function delay() {
        if(index<list.length){
            setTimeout(alertFuc, list[index].Time);
            index++;
            function alertFuc() {
                return gettime()
                return list[index].Value;
            }
            delay();
        }  
    }
    delay();      
}
printTask(input);