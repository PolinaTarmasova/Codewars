function comp(array1, array2) {
    if (array1 == null || array2 == null) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            let doubleArray1 = Math.pow(array1[i], 2);
            for (let j = 0; j < array2.length; j++) {
                if (doubleArray1 == array2[j]) {
                    array2.splice(j, 1);
                    break;
                }
            }
        }
        return array2.length > 0 ? false : true;
    }
}
