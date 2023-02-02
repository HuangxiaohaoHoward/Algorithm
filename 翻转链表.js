var node1 = {
    next: null,
    val: 1
};
var node2 = {
    next: null,
    val: 2
};
var node3 = {
    next: null,
    val: 3
};
var node4 = {
    next: null,
    val: 4
};

node1.next = node2
node2.next = node3
node3.next = node4

console.log(node1)
// 头插法
function reverseListNode(listNode) {
    var current = listNode
    var prev = null
    while (current !== null) {
        var next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}
console.log(reverseListNode(node1))