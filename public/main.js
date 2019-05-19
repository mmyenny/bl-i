let dropDownOne = false
let dropDownTwo = false
let dropDownThree = false

const toggleDropDownOne = () => {
  dropDownOne = !dropDownOne
  let element = document.querySelector('#dropDownOne')

  _dropDown(dropDownOne, element)
}

const toggleDropDownTwo = () => {
  dropDownTwo = !dropDownTwo
  let element = document.querySelector('#dropDownTwo')

  _dropDown(dropDownTwo, element)
}

const toggleDropDownThree = () => {
  dropDownThree = !dropDownThree
  let element = document.querySelector('#dropDownThree')

  _dropDown(dropDownThree, element)
}

const _dropDown = (bool, element) => {
  if (bool === true) {
    element.classList.remove('hide')
  } else {
    element.classList.add('hide')
  }
}

const main = () => {
  document
    .querySelector('#dropDownOneIcon')
    .addEventListener('click', toggleDropDownOne)
  document
    .querySelector('#dropDownTwoIcon')
    .addEventListener('click', toggleDropDownTwo)
  document
    .querySelector('#dropDownThreeIcon')
    .addEventListener('click', toggleDropDownThree)
}

document.addEventListener('DOMContentLoaded', main)
