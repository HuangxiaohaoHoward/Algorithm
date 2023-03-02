'use strict'

// https://leetcode.cn/problems/add-two-numbers/?favorite=2cktkvj
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 第二次尝试, 知道所求的结果是一个和输入一样的链表
/*
    1.考虑到进位
    2.组装新的链表 
*/
var addTwoNumbers2 = function (l1, l2) {
    var head = new ListNode()
    var tail = new ListNode()
    var n = 0
    var carry = 0

    while (l1 || l2) {
        var num = 0
        // 这里的非空判断有更好的写法
        // if (typeof (l1.val) === 'number' && typeof (l2.val) === 'number') {
        //     num = l1.val + l2.val + carry
        // } else if (typeof (l1.val) === 'number') {
        //     num = l1.val + carry
        // } else if (typeof (l2.val) === 'number') {
        //     num = l2.val + carry
        // } else {
        //     return head
        // }
        const v1 = l1 ? l1.val : 0
        const v2 = l2 ? l2.val : 0
        num = v1 + v2 + carry
        carry = parseInt(num / 10)
        var val = parseInt(num % 10)
        console.log("num = " + num + " --- val = " + val + " --- carry = " + carry)
        if (n === 0) {
            head.val = val
            tail = head
        } 
        // else if (n === 1) {
        //     tail = new ListNode(val)
        //     head.next = tail
        // } 
        else {
            tail.next = new ListNode(val)
            tail = tail.next
        }
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
        n += 1
        if (carry > 0) {
            tail.next = new ListNode(carry)
        }
    }
    
    return head
};


/// 第一次尝试，未仔细审题，输出了数字
var addTwoNumbers = function (l1, l2) {
    var n = 0
    var result = 0
    while (true) {
        console.log("Round : " + n)
        console.log("l1.val = " + l1.val)
        console.log("l2.val = " + l2.val)
        console.log("(Math.pow(10, n)) = " + (Math.pow(10, n)))

        result += (l1.val + l2.val) * (Math.pow(10, n))
        console.log("result = " + result)
        if (l1.next === null && l2.next === null) {
            console.log("return result = " + result)
            return result
        }
        n += 1
        l1 = l1.next
        l2 = l2.next
    }
};

var l11 = new ListNode(2)
var l12 = new ListNode(4)
var l13 = new ListNode(9)
l11.next = l12
l12.next = l13

var l21 = new ListNode(5)
var l22 = new ListNode(6)
var l23 = new ListNode(4)
var l24 = new ListNode(9)
var l25 = new ListNode(9)
l21.next = l22
l22.next = l23
l23.next = l24
l24.next = l25

var a2 = addTwoNumbers2(l11, l21)
do {
    console.log("a2.val = " + a2.val)
    a2 = a2.next
} while (a2 !== null);

// console.log(addTwoNumbers(l11, l21))

var a2 = addTwoNumbers2(new ListNode(5), new ListNode(5))
do {
    console.log("a2.val = " + a2.val)
    a2 = a2.next
} while (a2 !== null);