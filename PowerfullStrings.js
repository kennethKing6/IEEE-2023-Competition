const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function getOutPut(input1,input2){
    const combinations = [];
    const abba = []
    const none = []
    const abnba = []
    for(let c1 = 0; c1 < alphabet.length; c1++){
        for(let c2 = 0; c2 < alphabet.length;c2++){
            for(let c3 = 0; c3 < alphabet.length; c3++){
                combinations.push(`${alphabet[c1]}` + `${alphabet[c2]}` + `${alphabet[c3]}`)
            }
        }
    }

    for(let i = 0; i < combinations.length; i++){
        console.log(`combination ${i}`,combinations[i])
        if(combinations.findIndex(word => /\bab\b/.test(word)) || combinations.findIndex(word => /\bba\b/.test(word))){
            if(combinations.findIndex(word => /\bab\b/.test(word)) > -1   && combinations.findIndex(word => /\bba\b/.test(word)) > -1)
                abnba.push(combinations[i])
            else
                abba.push(combinations[i])
        }else{
            none.push(combinations[i])
        }
    }
    console.log("abnba",abnba)


    const first = none.length * 1
    const second = abba.length * 2
    const third = abnba.length * 4
     return first + second + third
}
// console.log(getOutPut("ab","ba"))
console.log(Math.pow(2,256)%998244353)
// def getOutPut(input1,input2):
//     combinations = []
//     for c1 in string.ascii_lowercase:
//         print('c1',c1)
//         for c2 in string.ascii_lowercase:
//             print('c2',c2)
//             for c3 in string.ascii_lowercase:
//                 print('c3',c3)
//                 combination = c1 + c2 + c3
//                 combinations.append(combination)
//     abba = []
//     none = []
//     abnba = []
//     for combination in combinations:
        
            
//         if(input1 in combination or input2 in combination):
//             if(input1 in combination and input2 in combination):
//                     abnba.append(combination)
//             else: abba.append(combination)
//         else:
//             none.append(combination)
        
//     first = len(none) * 1
//     second = len(abba) * 2
//     third = len(abnba) * 4
//     return first + second + third

// # print(getOutPut("ab","ba"))

// def generate_combinations(n):
//     if n < 1 or n > 20:
//         raise ValueError("n must be between 1 and 20")

//     combinations = []
//     for c in range(n):
//         for c1 in string.ascii_lowercase:
//             for c2 in string.ascii_lowercase:
//                 for c3 in string.ascii_lowercase:
//                     combination = c1 + c2 + c3
//                     combinations.append(combination)

//     return combinations

// print(generate_combinations(5))