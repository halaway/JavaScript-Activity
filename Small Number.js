let nums = [10, 15, 3, -2, 9000, -44];

var small = nums[0];

for(i=1; i<nums.length; i++){
	if (nums[i]< small ){
		small = nums[i];
	}
}
console.log(small)