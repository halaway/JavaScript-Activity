let nums= [10, 15, 3, -2, 9000, -44];

let revNums=[];

for(i=nums.length-1; i>=0; i--){
	revNums[nums.length-1-i]= nums[i];
	
}
console.log(revNums)
