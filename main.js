// selecter
let form = document.querySelector(`form`)
let input = document.querySelector(`input`)
let groceryUl = document.querySelector(`.grocery ul`)
// console.log(groceryUl);
let lis = document.querySelectorAll(`grocery ul li`)
console.log(lis);


let userInput = ""
let arr = []
let editState = false
let editContent = ""
// function
function addValue(e) {
    userInput = e.target.value
}
function submitValue(e) {
    e.preventDefault()
    if (editState === false) {
        arr.push(userInput)
    }
    else {
        let idx = arr.findIndex((item) => {
            return item === editContent.trim()
        })
        arr.splice(idx, 1, userInput)
    }
    showToWebsite()
    input.value = ""
    editContent = ""
    editState = false

}
function showToWebsite() {
    let str = ""
    arr.forEach((item) => {
        str += ` <li>${item}<span><i class="fas fa-thumbtack"></i><i class="far fa-edit"></i> <i class="fas fa-trash"></i></span></li>`
    })
    groceryUl.innerHTML = str
}
function deleteList(e) {
    if (e.target.classList.contains(`fa-trash`)) {
        // console.log(e.target.parentElement.parentElement);
        let content = e.target.parentElement.parentElement.textContent.trim()
        console.log(content);
        let idx = arr.findIndex((item) => {
            return item === content
        })
        arr.splice(idx, 1)
        showToWebsite()
    }
}
function editList(e) {
    if (e.target.classList.contains(`fa-edit`)) {
        editState = true
        editContent = e.target.parentElement.parentElement.textContent.trim()

        input.value = editContent
    }
}


// Event 
form.addEventListener(`change`, addValue)
form.addEventListener(`submit`, submitValue)
groceryUl.addEventListener(`click`, deleteList)
groceryUl.addEventListener(`click`, editList)