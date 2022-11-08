// Menu
let navigation = document.querySelector(".navigation")
let hamburgermenu = document.querySelector(".hamburger_menu")

hamburgermenu.addEventListener("click", () => {
    navigation.classList.toggle("openmenu")
})

let questions = Array.from(document.querySelectorAll(".questions"))
let onpenResponse = Array.from(document.querySelectorAll(".onpen__response"))
let response = Array.from(document.querySelectorAll(".response"))
let content = {
    content0: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas iste veniam ut porro, ullam quibusdam at. Enim, error ad.",
    content1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas iste veniam ut porro, ullam quibusdam at. Enim, error ad.",
    content2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas iste veniam ut porro, ullam quibusdam at. Enim, error ad.",
    content3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas iste veniam ut porro, ullam quibusdam at. Enim, error ad."
}
onpenResponse.forEach((current, index) => {
    let p = document.createElement("p")
    let quest = questions[index]
    let resp = response[index]
    let cont = content["content" + index]

    current.addEventListener("click", () => {
        if (!quest.classList.contains("active")){
            p.innerHTML = cont
            resp.appendChild(p)
            quest.classList.add("active")
        } else{
            resp.removeChild(p)
            quest.classList.remove("active")
        }
    })
    
})