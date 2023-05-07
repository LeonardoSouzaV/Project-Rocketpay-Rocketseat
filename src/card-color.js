export { ccBgColor01, ccBgColor02, ccLogo, setCardType }

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#2D88F2", "#434699"],
    mastercard: ["#CD3232", "#DFA129"],
    elo: ["#2946DF", "#C63232"],
    americanexpress: ["#2DB7F2", "#438A99"],
    hipercard: ["#E91E1E", "#F22D2D"],
    default: ["#FFFFFF", "#000000"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
