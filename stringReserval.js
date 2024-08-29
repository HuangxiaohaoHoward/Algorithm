var str = 'apple'

function reverseString(str) {
    if (typeof str !== 'string') {
        return ""
    }
    let strArr = Array.from(str)
    var start = 0
    var end = str.length - 1
    while (end > start) {
        var startNum = strArr[start]
        strArr[start] = strArr[end]
        strArr[end] =  startNum
        start += 1
        end -= 1
    }
    console.log(strArr);
    var r1 = strArr.join("");
    console.log(r1);
    console.log(strArr);
    return r1
}
console.log(reverseString(str))
