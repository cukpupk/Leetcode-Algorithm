/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort(compat);
        function compat(a,b){
            if(a[0]<b[0])
                return -1;
            if(a[0]>b[0])
                return 1;
            if(a[0]==b[0])
                if(a[1]<b[1])
                    return -1;
                if(a[1]>b[1])
                    return 1;
            return 0;
        }
    let start = intervals[0][0];
    let end = intervals[0][1];
    let merged = [];
    for(let i=1;i<intervals.length;++i){
        if(intervals[i][0]>end){
            merged.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        else{
            end = Math.max(end, intervals[i][1]);
        }
    }
    merged.push([start,end]);
    return merged;
};