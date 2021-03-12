// 4. Median of Two Sorted Arrays
// Hard
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

findMedianSortedArrays = (nums1, nums2) => {
    let newArr = nums1.concat(nums2).sort((a,b) => a-b);
    if(newArr.length==2){
        return ((newArr[0]+newArr[1])/2)
    }
    else if((newArr.length/2) % 2 ==0 || (newArr.length/2) % 1 ==0 ){
        return ((newArr[newArr.length/2]+newArr[(newArr.length/2)-1])/2)
    }else{
        return newArr[Math.floor(newArr.length/2)]
    }
}
console.log(findMedianSortedArrays([],[1,2,3,4,5,6]))
