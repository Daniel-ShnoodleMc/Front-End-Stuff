//1.
qBord()
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let minAge = ages[ages.length-1] - ages[0];
console.log("The Ages:", ages);
console.log("MinusAges:", minAge);

ages.push(517)
let minAge2 = ages[ages.length-1] - ages[0];
console.log("New Ages:", ages);
console.log("New MinusAges:", minAge2);

agesAverage = 0;
ages2Average = 0;

for (i = 0; i < ages.length; i++) {
    agesAverage += ages[i];
}
agesAverage = agesAverage / ages.length;
console.log("Average: ", agesAverage);
//2.
qBord()
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
nameAverage = 0;
		for (i = 0; i < names.length; i++) {
			nameAverage += names[i].length;
		} 
		nameAverage /= names.length;
        console.log("Average: ", nameAverage);

        concats = "";
		for (i = 0; i < names.length; i++) {
			concats += names[i];
			concats += ", ";
		}
console.log("Concatenation: ", concats);
    
//3.
qBord()
console.log("You use array[array.length()-1] so it works with any length of an Array!");
//4.
qBord()
console.log("You use array[0] due to the 0 base counting system.");
//5.
qBord()
let nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths Array: ", nameLengths)
}
//6.
qBord()
let totChar = 0;
for (i = 0; i < nameLengths.length; i++) {
    totChar += nameLengths[i];
    console.log("Sum Of Letters: ", totChar)
}

//7.
qBord()
function sevFun(word, n) {
    sevRes = "";
    for (i = 0; i < n; i++) {
        sevRes += word;
    }
    console.log(sevRes);
}

sevFun("Meow", 7)
//8.
qBord()

function eigFun(firstName, lastName) {
    console.log(firstName, " ", lastName);
}

eigFun("Chowder", "Burgess")
//9.
qBord()

function ninFun(numArr) {
numNum = 0;
for (i = 0; i < numArr.length; i++) {
    numNum += numArr[i];
}
if (numNum > 100) {
    console.log("This is True!");
} else {
    console.log("Less than 100...");
}
}
let arr1 = [21, 20, 28, 33];
let arr2 = [17, 15, 8, 19];

ninFun(arr1)
ninFun(arr2)
//10.
qBord()
function tenFun(numArr) {
    numNum = 0;
    averNum = 0;
for (i = 0; i < numArr.length; i++) {
    numNum += numArr[i];
}
averNum = numNum/numArr.length;
console.log("Average: ", averNum);
}

tenFun(arr2)
//11.
qBord()
function eleFun(numArr, numArr2) {
    numNum = 0;
    averNum = 0;
    numNum2 = 0;
    averNum2 = 0;
for (i = 0; i < numArr.length; i++) {
    numNum += numArr[i];
}
for (i = 0; i < numArr2.length; i++) {
    numNum2 += numArr2[i];
}
averNum = numNum/numArr.length;
averNum2 = numNum2/numArr2.length;

if (averNum > averNum2) {
    console.log("First Array is Bigger at: ", averNum);
} else if (averNum < averNum2) {
    console.log("Second Array is Bigger at: ", averNum2);
} else {
    console.log("Both have the same Average of: ", averNum);
}
}
eleFun(arr1, arr2)
eleFun(arr2, arr1)
eleFun(arr2, arr2)

//12.
qBord()
function tweFun(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
		console.log(true);
	} else {
		console.log(false);
	}
}

tweFun(true, 11.20)
tweFun(true, 3.92)
tweFun(false, 37.83)
//13.
qBord()

function qBord() {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
}

//I really needed to get a good border to separate the answers!

//console.log();