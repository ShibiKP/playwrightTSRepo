
const testarray:number[]=[10,22,32,54,67,55,45,33,55,22];

const{even,odd}=testarray.reduce((totalnum,currentnumber)=>
{
    if(currentnumber%2==0){
        totalnum.even.push(currentnumber);
    }
    else{
        totalnum.odd.push(currentnumber);
    }
    return totalnum;
},
{even : [] as number[], odd: [] as number[]}
)

console.log(even.sort((a,b)=>a-b))
console.log(odd)