import {cardCharacter, spinner} from './view.js'
import {getPropertyCss} from './util.js'
// FUNCION QUE OBTIENE DATOS DE PERSONAJE DESDE API ENDPOINT
const request = async (id) => {
    const urlBase = `https://swapi.dev/api/people/${id}/`
    const response = await fetch(urlBase)
    const responseJson = await response.json()
    return responseJson
}

// CREA los personajes  DE FORMA ASINCRONA una vez obtenidos los datos de estos
// recibe el elemento html padre de tarjeta a agregar, rango inicial, rango final, 
// Clase de circulo para color de fondo
// ****** ♥ ♥ ♥ ♥ ♥
const activeCallAsync = async (element,initiate, end, circle) => {

    //  Agregar promesas a un arreglo 
    const promises = []
    for (let i = initiate; i <= end ; i++){
        promises.push(request(i))
    }
    console.log('promesas:', promises)
    // Ejecutar promesas en paralelo
    Promise.all(promises)
        .then(results => {
            console.log(results)
            let x = 0
            for (const response of results) {
                x++
                if (x == 1){
                    element.innerHTML = cardCharacter(circle, response.name , `Estatura: ${response.height} cm. Peso: ${response.mass} kg.`)
                }else {
                    element.innerHTML += cardCharacter(circle, response.name , `Estatura: ${response.height} cm. Peso: ${response.mass} kg.`)
                }
            }
        })
        .catch(error => {
            console.error(error); // Manejo de errores
        })
}
// ♥ ♥ ♥ ♥ ♥ ************************************ 

// activar spinner
const activeView = (event) => {
    //contenedor de personajes activar spinner
    let contentCharacters = document.getElementById('contentcharacters')
    contentCharacters.innerHTML = spinner()

    // Mostrar contenedor de Personajes
    if (getPropertyCss(contentCharacters,'display') === 'none'){
        contentCharacters.style.display = 'block'
    }
}

export {activeCallAsync, activeView}