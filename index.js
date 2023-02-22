document.getElementById('do-btn').addEventListener("click", getActivity)

function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
     .then(response => response.json())
     .then(data => {
         console.log(data)
         document.getElementById("activity-name").textContent = data.activity
     })
}