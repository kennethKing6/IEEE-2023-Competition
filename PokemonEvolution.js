
const input = '10 3 1 1'
const [N, M, X, Y] = input.split(' ').map(Number);
console.log("Math.floor(M / X)",Math.floor(M / X))
console.log("N",N)
const maxEvolve = Math.min(Math.floor(M / X), N);
console.log(maxEvolve);