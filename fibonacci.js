// FIBONACCI ITERATIVE
function fibIterative(n) {
    let fibArray = [];
    if (n === 1) {
        fibArray.push(0);
        return fibArray;
    } else if (n === 2) {
        fibArray.push(0);
        fibArray.push(1);
        return fibArray;
    } else {
        fibArray = [0, 1];
        let positionOne = 0;
        let positionTwo = 1;
        let newValue;
        for (let i = 2; i < n; i++) {
            newValue = fibArray[positionOne] + fibArray[positionTwo];
            fibArray.push(newValue);

            positionOne = positionOne + 1;
            positionTwo = positionTwo + 1;
        }
        return fibArray;
    }
}

// FIBONACCI RECURSIVE
function fibRecursive(n) {
    if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1];
    } else {
        let a = fibRecursive(n - 1);
        // The nth number appears on the position n - 1 on the array
	// n - 2 = n - 1 - 1; n - 3 = n - 2 - 1 etc.
        a.push(a[a.length - 1] + a[a.length - 2]);
        return a;
    }
}

console.log('FIBONACCI ITERATIVE')
console.log(fibIterative(10), '\n');
console.log('FIBONACCI RECURSIVE')
console.log(fibRecursive(10));
