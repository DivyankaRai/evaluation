// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",
submitForm)

var formarr = JSON.parse(localStorage.getItem("info")) || []
function submitForm(){
    event.preventDefault()

    var data = {
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,

    }
    formarr.push(data)
    console.log(formarr)
    localStorage.setItem("info" , JSON.stringify(formarr))
}
