// CyclicRotation
// Rotate an array to the right by a given number of steps

function solution(A, K) {
// Validate that A is an array and K is an integer
    if (Array.isArray(A)=== true && Number.isInteger(K) === true && K > 0 ){
// Declare the variable N, which is the number if integers in an array
        const N = A.length;
//  Calculates the number of rotations needed by taking the modulus of K and N to ensure that if K > N, the array still rotates without errors
        const rotations = K % N;
// If the rotations === 0 the rotation needs to remain the same
        if (rotations === 0){
            return A
        }
// create a new array by slicing the last element and concating it with the rest of the elements except the last
        const rotatedArr = A.slice(-rotations).concat(A.slice(0, -rotations));
// Final Output
        return rotatedArr;
    }
// If the validation is falsy we get this output
    else return "Param A has to be a valid Array and Param K has to be a POSITIVE integer" 
}