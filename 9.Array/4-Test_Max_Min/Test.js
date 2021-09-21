const num = [10, 40, 30, 50, 20];

const max_min = function(x){

    let max = x[0];
    let min = x[0];

    for(let i=0; i < x.length; i++){
        
        const a = x[i];
        if(a>max){
            max = a;
        } 
        if(a<min) {
            min = a;
        }
    }

    console.log(max, min);
    return max - min;
}

console.log(max_min(num));