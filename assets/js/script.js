// Leer Valor de Propiedad CSS
const getPropertyCss = (element, cssname) => {
    let elementStyle = getComputedStyle(element)
    let display = elementStyle.getPropertyValue(cssname)
    return display
}

// Funcion para crear Cards de forma dinamica
const cardCharacter = (circleClass, title, content) => {
    let card = `
    <div class="m-2 efect">
        <div class="card shadow">
            <div class="card-body">
                <div class="row align-items-start">
                    <div class="col-5">    
                        <div class="circle ${circleClass}"></div>
                    </div>
                    <div class="col-7">    
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>                            
                </div>
            </div>
        </div>
    </div>
    `
    return card
}

// FUNCION QUE OBTIENE EL ENDPOINT DEL PERSONAJE
const request = async(id) => {
    const urlBase = `https://swapi.dev/api/people/${id}/`
    const response = await fetch(urlBase)
    const responseJson = await response.json()
    return responseJson
}



// ************************************
const activeCall = async (event) => {
    let evento = event.currentTarget

    let contentCharacters = document.getElementById('contentcharacters')

    if (getPropertyCss(contentCharacters,'display') === 'none'){
        contentCharacters.style.display = 'block'
    }

    circle = evento.getElementsByClassName('circle')[0]
   

    // PROMISE.ALL
    let response = await request(1)

    contentCharacters.innerHTML = '' + cardCharacter(circle.classList[1], response.name , `Estatura: ${response.height} cm. Peso: ${response.mass} kg.`)


    contentCharacters.innerHTML += cardCharacter(circle.classList[1], "Nombre" , "Datos")
    contentCharacters.innerHTML += cardCharacter(circle.classList[1], "Nombre" , "Datos")
    contentCharacters.innerHTML += cardCharacter(circle.classList[1], "Nombre" , "Datos")
    contentCharacters.innerHTML += cardCharacter(circle.classList[1], "Nombre" , "Datos")
}


// CARGA INICIAL
document.addEventListener('DOMContentLoaded', () => {
    // ACTIVAR EVENTOS
    const prompters = document.getElementsByClassName('prompter')
    for (let i = 0; i < prompters.length; i++) {
        let element = prompters[i]
        element.addEventListener('mouseenter' , activeCall)
    }
    console.log('request', request(1))
})
