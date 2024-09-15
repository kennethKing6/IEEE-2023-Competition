
const array1 = [2,1,2,3,2,3];
const array2 = [3,1,2,1,3,3];

function arrayIntersection(a1 = [], a2 = []){
    const intersection = {}
    const result = []
    
    a2.map((v,i)=>{
        if(a1.includes(v)){
            if(!intersection[v]){
                const n = {
                  ...intersection[v]  
                };
                n[i] = i
                intersection[v] = n
            }else if(intersection[v]){
               const obj = intersection[v];
               if(!obj[i]){
                for(let k in obj){
                   const result =  a1.indexOf(v,k + 1);
                   if(result > -1){
                    let to = intersection[v];
                    to[result] = result;
                    intersection[v] = to
                   }
                }
               }
            }
           
        }
    })
   for(const v in intersection){
     const nth = Object.values(intersection[v]).length
     for(let i = 0; i < nth; i++)result.push(parseInt(v))
   }
return result
}

console.log(arrayIntersection(array1,array2))