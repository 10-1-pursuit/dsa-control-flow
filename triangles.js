const rightIsosceles = (num) => {
    let triangle = ''
    for(let i = 1; i <= num; i++){
        let row = `${"#".repeat(i)}\n`
        triangle += row
    }
    return triangle
}

console.log(rightIsosceles(7))