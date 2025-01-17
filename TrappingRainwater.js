function getTrappedRainWater(array){
	let leftHeight = 0;
	let leftHeightIndex = 0;
	let secondMaxIndex = 0;
	let walls = 0;
	let trappedWater = 0;
	let wallsPoint = [];
	let wallsEndPoint = [];
	let point = 0;
	let secondMax = 0;
	for(let i = 0; i < array.length-1; i++){
		if(wallsPoint.length === 0){ //initWall
			if(array[i] > array[i+1]){
				wallsPoint.push(i);
				leftHeight = array[i];
				leftHeightIndex = i;
			}
		}else if((array[i-1] < array[i] && array[i] >= array[i+1])){//walls
			if(leftHeight <= array[i]){
				wallsPoint.push(i);
				leftHeight = array[i];
				leftHeightIndex = i;
				wallsEndPoint = [];
				secondMax = 0;
			}else{
				if(secondMax < array[i]){
					secondMax = array[i];
					wallsEndPoint=[];
				}
				if(wallsEndPoint.length !== 0){
					if(array[wallsEndPoint[wallsEndPoint.length - 1]] < array[i]){
						wallsEndPoint = wallsEndPoint.slice(0, wallsEndPoint.length-1)
					}
				}
				wallsEndPoint.push(i);
			}
		}else{
			if(secondMax < array[i]){
				secondMax = array[i]
			}
		}
	}

	if(array[array.length-1] < leftHeight && wallsEndPoint.length !== 0){
		wallsEndPoint.push(array.length-1);

		while(leftHeightIndex !== wallsEndPoint[wallsEndPoint.length - 1]){
			let lookupArr = wallsEndPoint.filter(p => p > leftHeightIndex);
			if(lookupArr.length > 1){
				secondMaxIndex = lookupArr.reduce( function (previous, current) { 
					return array[previous] > array[current] ? previous:current;
				});
			}else{
				break;
			}
			let tempArr = wallsEndPoint.slice();
			let point = 0;
			for(let i = 0; wallsEndPoint[i]<secondMaxIndex;i++){
				if(wallsEndPoint[i] === secondMaxIndex){
					break;
				}
				if(array[wallsEndPoint[i]] < array[secondMaxIndex]){
					tempArr.splice(point, 1)
					point--;
				}
				point++;
			}
			wallsEndPoint = tempArr;
			leftHeightIndex = secondMaxIndex;

		}
		wallsEndPoint = wallsEndPoint.slice(0, wallsEndPoint.length - 1)
		wallsPoint.push(...wallsEndPoint)
	}

	if(array[array.length-1] > array[array.length-2]){ //endWall
		wallsPoint.push(array.length-1);
	}

	for(let i = wallsPoint[0]+1; i < array.length; i++){
			if(i === Number(array.length - 1)){
				if(array[i] > array[i-1]){
					let width = i - wallsPoint[point];
					let height = Math.min(array[i], array[wallsPoint[point]]);
					trappedWater += width * height - (walls+height);
				}
				break;
			}
			if(i === wallsPoint[point+1]){//walls
				let width = i - wallsPoint[point];
				let height = Math.min(array[i], array[wallsPoint[point]]);
				trappedWater += width * height - (walls+height);
				walls = 0;
				point++;
			}else{
				let minHeight = Math.min(array[wallsPoint[point]], array[wallsPoint[point+1]]);
				if(array[i] <= minHeight){
					walls+= array[i];
				}else{
					walls+= minHeight;
				}
			}
	}
	return trappedWater;
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


