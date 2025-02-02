function fibonacciGenerator (n){
    var output = [];

    if(n === 1){
        output = [0];
    }

    else if (n === 2){
        output = [0, 1];
    }

    else{
        output = [0, 1];
        
        for(var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
    }
    }

    return output;

}

document.getElementById('result').addEventListener('click', () => {
    var n = parseInt(document.getElementById('number').value);

    if (!isNaN(n) && n > 0){
        var result = fibonacciGenerator(n);
        alert(`Fibonacci Sequence: ${result.join(", ")}`);
    } else {
        alert("Enter a valid number greater than 0!");
    }
});