var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum =  (n * (n + 1))/2;
    let sum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - sum; 
};