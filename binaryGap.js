// Binary Gap

function solution(N) {
    if (N > 0 && Number.isInteger(N) === true){
    // Convert Number To Binary
        const binary = N.toString(2);
    // define maximum gap, current gap, and counting state
        let maxGap = 0;
        let currentGap = 0;
        let countingState = false;
    // Iterate over the binary number as we apply logic to the elements of the string
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
    // If N is not a positive integer we get this output
    } return "Enter A Positive Number That Is Not A Float. INTEGERS ONLY"
}