let hamburgerMenu = false
let dropDownOne = false
let dropDownTwo = false
let dropDownThree = false

let firstName = ''
let lastName = ''
let company = ''
let phoneNumber = ''
let email = ''
let reasonOfContact = ''

const toggleHamburgerMenu = () => {
  hamburgerMenu = !hamburgerMenu
  let element = document.querySelector('#hamburgerMenu')

  _dropDown(hamburgerMenu, element)
}

const _formSectionOne = () => {
  company = document.querySelector('#company').value
  reasonOfContact = document.querySelector('#reasonOfContact').value

  let sectionOne = document.querySelector('#sectionOne')
  let sectionTwo = document.querySelector('#sectionTwo')

  _dropDown(false, sectionOne)
  _dropDown(true, sectionTwo)
}

const _formSectionTwo = () => {
  firstName = document.querySelector('#firstName').value
  lastName = document.querySelector('#lastName').value
  phoneNumber = document.querySelector('#phoneNumber').value
  email = document.querySelector('#email').value

  let element = document.querySelector('#toast')
  let sectionTwo = document.querySelector('#sectionTwo')

  submitForm()
  _dropDown(false, sectionTwo)
  _dropDown(true, element)
}

const submitForm = () => {
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
  document.querySelector('#continue').addEventListener('click', _formSectionOne)
  document
    .querySelector('#submitForm')
    .addEventListener('click', _formSectionTwo)
  document.querySelector('#search').addEventListener('click', _submitSearch)
}

document.addEventListener('DOMContentLoaded', main)
