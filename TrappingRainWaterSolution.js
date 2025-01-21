// function getTrappedRainWater(waterArr){
//   let totalWater = 0;
//   let maxRightHeight = 0;
//   let maxLeftHeight = 0;
//   for(let i = 0; i < waterArr.length; i++){
//     maxLeftHeight = getMaxHeight(0, i, waterArr);
//     maxRightHeight = getMaxHeight(i+1, waterArr.length, waterArr);
//     let total = Math.min(maxLeftHeight, maxRightHeight) - waterArr[i];
//     if(total > 0){
//       totalWater += total;
//     }
//   }
//   return totalWater;
// }
// function getMaxHeight(a,b,waterArr){
//   let maxHeight = 0;
//   for(let i = a; i < b; i++){
//     if(waterArr[i] > maxHeight){
//       maxHeight = waterArr[i];
//     }
//   }
//   return maxHeight;
// }

// console.log(getTrappedRainWater([0,1,0,2,1,0,3,1,0,1,2])) //8
// 	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
// 	console.log(getTrappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1])) //6
// 	console.log(getTrappedRainWater([3,4,3])) //0
// 	console.log(getTrappedRainWater([3,4,2,3])) //1
// 	console.log(getTrappedRainWater([5,5,1,7,1,1,5,2,7,6])) //23
// 	console.log(getTrappedRainWater([])) //0
// 	console.log(getTrappedRainWater([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])) //26
// 	console.log(getTrappedRainWater([2,8,5,5,6,1,7,4,5])) //12
// 	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
// 	console.log(getTrappedRainWater([9,6,8,8,5,6,3])) //3
// 	console.log(getTrappedRainWater([9,2,9,3,2,2,1,4,8])) //35
// 	console.log(getTrappedRainWater([9,8,3,2,3,3,4,5,7,3])) //22
// 	console.log(getTrappedRainWater([4,3,8,3,1,5,9,9,0,4,3,4,7])) //33
// 	console.log(getTrappedRainWater([1,9,7,1,3,6,4,7,4,8,3,6,3,5,3,7])) //39


  function getTrappedRainWater(waterArr){
		let totalWater = 0;
		let maxRightHeight = 0;
		let maxLeftHeight = 0;
		let p = 0;
		let q = waterArr.length - 1;
		while(p <  q){
			let total = 0;
			if(waterArr[p] <= waterArr[q]){
				total = maxLeftHeight - waterArr[p];
				if(maxLeftHeight < waterArr[p]){
					maxLeftHeight = waterArr[p];
				}
        p++;
			}else{
				total = maxRightHeight - waterArr[q];
				if(maxRightHeight < waterArr[q]){
					maxRightHeight = waterArr[q];
				}
        q--;
			}
			if(total > 0){
				totalWater += total;
			}
		}
		return totalWater;
	}

	console.log(getTrappedRainWater([0,1,0,2,1,0,3,1,0,1,2])) //8
	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
	console.log(getTrappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1])) //6
	console.log(getTrappedRainWater([3,4,3])) //0
	console.log(getTrappedRainWater([3,4,2,3])) //1
	console.log(getTrappedRainWater([5,5,1,7,1,1,5,2,7,6])) //23
	console.log(getTrappedRainWater([])) //0
	console.log(getTrappedRainWater([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])) //26
	console.log(getTrappedRainWater([2,8,5,5,6,1,7,4,5])) //12
	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
	console.log(getTrappedRainWater([9,6,8,8,5,6,3])) //3
	console.log(getTrappedRainWater([9,2,9,3,2,2,1,4,8])) //35
	console.log(getTrappedRainWater([9,8,3,2,3,3,4,5,7,3])) //22
	console.log(getTrappedRainWater([4,3,8,3,1,5,9,9,0,4,3,4,7])) //33
	console.log(getTrappedRainWater([1,9,7,1,3,6,4,7,4,8,3,6,3,5,3,7])) //39