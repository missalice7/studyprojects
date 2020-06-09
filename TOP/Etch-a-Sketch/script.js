let container = document.getElementById("container");

//fazer 60 vezes quadrados
for (let i = 0; i <= 60; i++) {
    let divs = []
    divs[i] = document.createElement("div")
    container.appendChild(divs[i]).classList.add("box")
    
}