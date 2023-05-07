import "./css/index.css"
import IMask from "imask"

import { updateCardHolder } from "./card-name"
updateCardHolder()

import { updateCardNumber } from "./card-number-and-flag"
updateCardNumber()

import updateSecurityCode from "./card-security-code"
updateSecurityCode()

import updateExpirationDate from "./card-expiration-date"
updateExpirationDate()

// Submit button
const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () => {
  alert("Cartão adicionado!")
})

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})
