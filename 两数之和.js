'use strict';
/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

链接：https://leetcode.cn/problems/two-sum
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力解法
/*
双层for循环，O(n2)
内存少
*/
var twoSum = function (nums, target) {
    for (let n = 0; n < nums.length; n++) {
        const num = nums[n];
        for (let m = n + 1; m < nums.length; m++) {
            const num2 = nums[m];
            if (num + num2 == target) {
                return [n, m]
            }
        }
    }
};

// console.log(twoSum([2,7,11,15], 9))

// 哈希表法
/*
O(n)
内存占用高
*/
function twoSum2(nums, target) {
    var sumDic = new Map()
    for (let n = 0; n < nums.length; n++) {
        const num = nums[n];
        if (sumDic.has(target - num) === true) {
            return [sumDic.get(target - num), n]
        }
        sumDic.set(num, n)
        console.log('n :' + n)
    }
}
// console.log(twoSum2([3,2,4], 6))

// console.log(twoSum2([2,7,11,15], 9))

/*
双指针法
O(n)
费力，看似高端，但是内存占用高于哈希表法
*/

function twoSum3(nums, target) {
    if (!Array.isArray(nums) ||
        nums.length === 0) {
        return []
    }
    // 1.排序
    var nums2 = nums.map((num, idx) => {
        return {
            value: num,
            idx: idx
        }
    }).sort((a, b) => {
        return a.value - b.value
    })
    console.log("nums2 : " + nums2)
    // 2.寻找
    var left = 0
    var right = nums2.length - 1
    while (left < right) {
        let result = nums2[left].value + nums2[right].value
        if (result > target) {
            right -= 1
        } else if (result < target) {
            left += 1
        } else if (result === target) {
            return [
                Math.min(nums2[left].idx, nums2[right].idx),
                Math.max(nums2[left].idx, nums2[right].idx)
            ]
        }
    }
    return []
}

console.log(twoSum3([15, 2, 7, 11], 9))
