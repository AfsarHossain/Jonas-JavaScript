const num1 = [10, 20, "Hello", 30];
const num2 = [40, 50, 60];


const con_cat = function(n1, n2) {
    const temp = n1.concat(n2);

    console.log(temp);

    let max = temp[0];
    let min = temp[0];

    for(let i = 0; i < temp.length; i++){

        const curTemp = temp[i];

        if (typeof curTemp !== 'number') {
            continue;
        }

        if(curTemp > max) {
            max = curTemp;
        }

        if(curTemp < max) {
            min = curTemp;
        }
    }

    console.log(max, min);

    return max - min;
}

const result = con_cat(num1, num2);

console.log(result);