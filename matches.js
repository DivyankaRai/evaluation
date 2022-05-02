// write js code here corresponding to matches.html
var formarr = JSON.parse(localStorage.getItem("info"))
var matchdataarr = JSON.parse(localStorage.getItem("matchdataa")) || []
display(formarr)
function display(data){

    data.forEach(function(elem){

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText= elem.matchNum

        var td2 = document.createElement("td")
        td2.innerText= elem.teamA

        var td3 = document.createElement("td")
        td3.innerText= elem.teamB

        var td4 = document.createElement("td")
        td4.innerText= elem.date

        var td5 = document.createElement("td")
        td5.innerText= elem.venue

        var td6 = document.createElement("td")
        td6.innerText= "Favourites"
        td6.style.color= "green"
        td6.addEventListener("click",function(){
            matchdata(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
         document.querySelector("tbody").append(tr)

    })
    function matchdata(elem){
        console.log(elem)
        matchdataarr.push(elem)
        localStorage.setItem("matchdataa",JSON.stringify(matchdataarr))
    }
}

document.querySelector("#filterVenue").addEventListener("change",fiterList)

function filterList(){
    var display = document.querySelector("#filterVenue".value)
    var filterarr = matchdataarr.filter(function(elem){
        return elem.venue == display
    })
    display(filterarr)
}