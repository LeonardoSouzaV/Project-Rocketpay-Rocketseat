export { securityCode, securityCodePattern, securityCodeMasked }

const securityCode = document.querySelector("#security-code")
const securityCodePattern = { mask: "0000" }

const securityCodeMasked = IMask(securityCode, securityCodePattern)

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})
export default function updateSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value")
  ccSecurity.innerText = code.length === 0 ? "123" : code
}
