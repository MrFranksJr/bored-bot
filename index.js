import buttonArray from "/data/buttonArray.js"
import { loadingSvg, randomIntFromInterval } from "/data/utils.js"

const doBtn = document.getElementById('do-btn')
let oldIndex = 0

doBtn.addEventListener("click", getActivity)

function getActivity() {
  doBtn.innerHTML = loadingSvg
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        let newIndex = randomIntFromInterval(0, buttonArray.length-1)
        while (newIndex === oldIndex) {
          console.log(newIndex)
          newIndex = randomIntFromInterval(0, buttonArray.length-1)
        }
        document.getElementById("activity-name").textContent = data.activity
        doBtn.innerHTML = buttonArray[newIndex]
        oldIndex = newIndex
      })
}