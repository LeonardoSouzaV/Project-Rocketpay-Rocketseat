export {
  expirationDate,
  expirationDatePattern,
  expirationDateMasked,
  updateExpirationDate,
}

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})

export default function updateExpirationDate(date) {
  const ccExpiration = document.querySelector(".cc-extra .value")
  ccExpiration.innerText = date.length === 0 ? "02/32" : date
}
