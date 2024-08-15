let fruits = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sort() {
    for(i = 0; i < fruits.length; i++){
        if(fruits[i] === "apple") {
            // console.log("apple")
            appleShelf.textContent += " " + fruits[i]
        } else {
            orangeShelf.textContent += " " + fruits[i]
            // console.log("orange")
        }
    }
}
sort()