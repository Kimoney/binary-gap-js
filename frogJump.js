function solution(X, Y, D){
    let currentPosition = X
    const jumpInterval = D
    let target = Y //anything equal or greater than Y
    let jumps = 0

    while(target > currentPosition){
        target = target - jumpInterval
        jumps = jumps + 1
    }
    console.log(jumps)
    return jumps
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2(X, Y, D) {
    // Implement your solution here
    const coveredDistance = Y - X

    const jumps = Math.ceil(coveredDistance / D)

    return jumps
}

function solutionMiss(A) {
    // Implement your solution here
    N = A.length
    console.log(N)
    // integers are between 1 and n+1
    let count = N+1

    while (count >= 1){
        if (count === A.find(integer => integer === count)){
            count -= 1
        }
        else{
            return count
        }
    }ty
}

// Perfomance tests considered.. Time complexity 
function solutionMiss2(A) {
    const N = A.length;
    const presence = Array(N + 2).fill(false); // Initialize an array to mark presence
    
    for (let i = 0; i < N; i++) {
        presence[A[i]] = true; // Mark the presence of each number
    }

    for (let i = 1; i <= N + 1; i++) {
        if (!presence[i]) { // If the number is not present, it's the missing element
            return i;
        }
    }
}

solutionMiss([2,3,1,5])
solutionMiss2([2,3,1,5])
// solution(10,85,30)
// solution2(10,85,30)