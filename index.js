// Can be changed
const numberOfSpirals = 3

// Setup 2-Dimensional Array 
const width = 2 * numberOfSpirals - 1
const height = width
const grid = Array(width)
for (let x = 0; x < width; x++){
	grid[x] = Array(height)
	for (let y = 0; y < height; y++){
		grid[x][y] = 0
	}
}

// Do the spiral
const biggestNumber = width * height
let currentX = numberOfSpirals - 1
let currentY = currentX
let currentSpiral = 0
for (let currentNumber = 1; currentNumber <= biggestNumber;){
	for (let dir = 0; dir < 4; dir++){
		let numberOfSteps;
		if (dir == 0) {
			numberOfSteps = currentSpiral * 2 - 1
		} else if (dir == 3) {
			numberOfSteps = currentSpiral * 2 + 1
		} else {
			numberOfSteps = currentSpiral * 2
		}
		for (let stepsLeft = numberOfSteps; stepsLeft > 0; stepsLeft--){
			grid[currentX][currentY] = currentNumber
			currentNumber++
			if (dir == 0){
				currentX++
			} else if (dir == 1){
				currentY--
			} else if (dir == 2){
				currentX--
			} else {
				currentY++
			}
		}
	}
	currentSpiral++
}

// Output
const maximumDigets = biggestNumber.toString().length
for (let x = 0; x < width; x++){
	let line = ""
	for (let y = 0; y < height; y++){
		word = ""
		number = grid[x][y]
		numberDigets = number.toString().length
		for (let spaces = 0; spaces <= maximumDigets - numberDigets - 1; spaces++){
			word = word + " "
		}
		word = word + number.toString()
		line = line + word + " "
	}
	console.log(line)
}