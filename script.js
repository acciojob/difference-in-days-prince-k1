var dateDiffInDays = function (date1, date2) {
  //   write your code here
	if(date1 == date2) {return 0};
	let arr1 = date1.split('-');
	let arr2 = date2.split('-');
	let days = 0;
	for(let i = 0; i < arr1.length; i++){
		if(arr1[i] > arr2[i]){
			return -1;
		}
	}

	let y1 = New Date(date1);
	let y2 = New Date(date2);
	let diff = y2 - y1;

	return Math.floor(diff/(1000*60*60*24));
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
