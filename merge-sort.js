function merge(array, low, mid, high) {
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];

    let i = 0;
    let j = 0;

    for (let i = low; i <= mid; i++) {
        arrayOne.push(array[i]);
    }

    for (let j = mid + 1; j <= high; j++) {
        arrayTwo.push(array[j]);
    }

    console.log('Arrays: ');
    console.log(arrayOne);
    console.log(arrayTwo);

    while (i < arrayOne.length && j < arrayTwo.length) {
        if (arrayOne[i] < arrayTwo[j]) {
            arrayThree.push(arrayOne[i]);
            i = i + 1;
        } else {
            arrayThree.push(arrayTwo[j]);
            j = j + 1;
        }
    }

    for (; i < arrayOne.length; i++) {
        arrayThree.push(arrayOne[i]);
    }

    for (; j < arrayOne.length; j++) {
        arrayThree.push(arrayTwo[j]);
    }

    console.log('New array: ');
    console.log(arrayThree);

    let k = 0;
    for (let i = low; i <= high; i++) {
        array[i] = arrayThree[k];
        k = k + 1;
    }

    console.log('Merged array: ');
    console.log(array, '\n');
    
}

function mergeSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let mid = parseInt((low + high) / 2);
        mergeSort(array, low, mid); // left
        mergeSort(array, mid + 1, high); // right
        merge(array, low, mid, high);
    }
}

let arrayOne = [5, 3, 9, 4, 8, 2, 1, 6];
mergeSort(arrayOne);