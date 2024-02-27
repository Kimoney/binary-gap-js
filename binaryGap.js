// Binary Gap

function solution(N) {
    if (N > 0 && Number.isInteger(N) === true){
    // Convert Number To Binary
        const binary = N.toString(2);
    // define maximum gap, current gap, and counting state
        let maxGap = 0;
        let currentGap = 0;
        let countingState = false;
    // Loop over the binary number to act on it accordingly
    for ( let i=0; i < binary.length; i++){
        if(binary[i] === "1"){
            if (currentGap > maxGap){
                maxGap = currentGap;
            }
            currentGap = 0;
            countingState = true;
        } else if (countingState){
            currentGap++
        }
    }
    // Return the value  of Maximum Gap using the outermost conditionnal
    return maxGap
    } return "Enter A Positive Number That Is Not A Float. INTEGERS ONLY"
}