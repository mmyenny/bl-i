let hamburgerMenu = false
let dropDownOne = false
let dropDownTwo = false
let dropDownThree = false

const toggleHamburgerMenu = () => {
  hamburgerMenu = !hamburgerMenu
  let element = document.querySelector('#hamburgerMenu')

  _dropDown(hamburgerMenu, element)
}

const _submitForm = () => {
  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let company = document.querySelector('#company').value
  let phoneNumber = document.querySelector('#phoneNumber').value
  let email = document.querySelector('#email').value
  let reasonOfContact = document.querySelector('#reasonOfContact').value

  //created single form object
  let form = {
    firstName: firstName,
    lastName: lastName,
    company: company,
    phoneNumber: phoneNumber,
    email: email,
    reasonOfContact: reasonOfContact
  }

  console.log(form)
  //api call would pass in my form to the api
}

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

const _submitSearch = () => {
  let search = document.querySelector('#searchInput').value
  // window.location(`/search/${search}`)
  //how to navigate in JS
  console.log(search)
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
  document
    .querySelector('#hamburgerMenuIcon')
    .addEventListener('click', toggleHamburgerMenu)
  document
    .querySelector('#closeHamburgerMenu')
    .addEventListener('click', toggleHamburgerMenu)
  document.querySelector('#submitForm').addEventListener('click', _submitForm)
  document.querySelector('#search').addEventListener('click', _submitSearch)
}

document.addEventListener('DOMContentLoaded', main)
