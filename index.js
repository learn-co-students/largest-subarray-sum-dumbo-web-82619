function largestSubarraySum(arr) {
  let max = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {  
    max = max + arr[i] > 0 ? max + arr[i] : 0
    if (max > sum) sum = max
  }
  
  return sum
}


// working alternative, does not satisfy all edge cases

// function largestSubarraySum(arr) {
//   let result = 0
//   let idx = 0
 
//   while (idx < arr.length) {
//     let sub = arr.slice(0, idx + 1)
//     let sum = sub.reduce((a, b) => a + b)
//     if (sum > result) result = sum
//     subArrays.push(sum)
//     idx++
//   }
//   return result
// }
