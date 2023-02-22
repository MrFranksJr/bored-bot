import buttonArray from "../data/buttonArray"
import { loadingSvg, randomIntFromInterval } from "../data/utils"

const doBtn = document.getElementById('do-btn')

doBtn.addEventListener("click", getActivity)

function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        doBtn.innerHTML = loadingSvg
        console.log(data)
        document.getElementById("activity-name").textContent = data.activity
        doBtn.innerHTML = buttonArray[randomIntFromInterval(0, buttonArray.length-1)]
      })
}