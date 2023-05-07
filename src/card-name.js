export { cardHolder, cardHolderPatter, cardHolderMasked, updateCardHolder }

const cardHolder = document.querySelector("#card-holder")
const cardHolderPatter = {
  mask: "******************************",
  regex: /"^[a-zA-Z \b\0]+$"/,
}

const cardHolderMasked = IMask(cardHolder, cardHolderPatter)

cardHolderMasked.on("accept", () => {
  updateCardHolder(cardHolderMasked.value)
})

function updateCardHolder(value) {
  const ccHolder = document.querySelector(".cc-holder .value")
  ccHolder.innerText = value.length === 0 ? "FULANO DA SILVA" : value
}
