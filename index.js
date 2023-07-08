let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("display-ul")
const deleteBtn = document.getElementById("delete-btn")
const containerEl = document.getElementById("container")
const tabBtn = document.getElementById("tab-btn")
let imageStr = ""
const imgs=[
    "images/hip1.jpg",
    "images/hip2.jpg"
]

for (let i = 0; i<imgs.length; i++){
    imageStr += `<img class="team-img" src="${imgs[i]}">`
}

containerEl.innerHTML += imageStr


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(localStorage.getItem("myLeads"))
    })
})


inputBtn.addEventListener("click", function () {
    s = inputEl.value
    inputEl.value = ''
    myLeads.push(s)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = []
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href=${leads[i]} target='_blank'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems

}
