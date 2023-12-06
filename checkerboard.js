const createCheckerboard = (num) => {
    // Create empty string to hold a row
    let row = ""
    // Create empty string to hold our checkerboard
    let checkerboard = ""
    // Create row: Iterate up until the num argument
    for(let i = 0; i < num; i++){
        // If iterator is even add a "#" to the row string
        if(i % 2 === 0){
            row += "#"
        } else {
            // Else add " " to the row string
            row += " "
        }
    }
    // Create checkerboard: iterate up until the num argument
    for(let i = 0; i < num; i++){
        // if iterator is even, add row string to checkerboard string, and add new line character
        if(i % 2 === 0){
            checkerboard += row
            checkerboard += "\n"
        } else {
            // else: flip the string and add it to the checkboard, and add new line character
            checkerboard += row.split('').reverse().join('')
            checkerboard += '\n'
        }
    }
    // Return checkerboard string
    return checkerboard
}

console.log(createCheckerboard(8))