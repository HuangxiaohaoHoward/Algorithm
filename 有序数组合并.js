var a = [1, 3, 5, 7, 12];
var b = [2, 4, 6, 8, 9, 10, 11]

function mergeSortArray(a, b) {
    var aIdx = 0
    var bIdx = 0
    var resultArr = []
    while (aIdx < a.length || bIdx < b.length) {
        if (aIdx >= a.length && bIdx < b.length)  {
            resultArr.push(b[bIdx])
            bIdx += 1;
            break
        } else if (bIdx >= b.length && aIdx < a.length) {
            resultArr.push(a[bIdx])
            aIdx += 1;
            break
        }

        let av = a[aIdx]
        let bv = b[bIdx]
        if (av >= bv) {
            resultArr.push(bv)
            bIdx += 1
        } else {
            resultArr.push(av)
            aIdx += 1
        }
    }
    return resultArr
}

console.log(mergeSortArray(a, b)) 