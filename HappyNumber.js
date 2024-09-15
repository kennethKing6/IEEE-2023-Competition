

function isHappyNumber(n){
    let num = 0;
    let arr = [...`${n}`].map(Number);
    let visited={};
    const listOfNum = []

   while(parseInt(num) !== 1 && visited[num] !== 2){

    if(num > 0)num = 0;

    for(let i = 0; i < arr.length; i++){
        num += parseInt(Math.pow(parseInt(arr[i]),2))

    }
    arr = [...`${num}`].map(Number);
    if(visited[num])visited[num] = visited[num] + 1
    else visited[num] = 1
    
    listOfNum.push(num)
   }
//    console.log(visited)

   return num === 1
}


function countHappyNumbers(first,last){
    const happyNum = []
    for(let i = first; i < last; i++){
        if(isHappyNumber(i))happyNum.push(i)
    }
    happyNum.push(last)
    return happyNum.length
}

console.log(findHappyNumbers(1,44))