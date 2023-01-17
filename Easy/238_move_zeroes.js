var moveZeroes = function(nums) {
    let left = 0, right = 0;
    if (nums.length <=1 ) return nums;
    while(right < nums.length){
        if(nums[right] === 0){
            right++;
        }else{
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right++;
        }
    }
    
};