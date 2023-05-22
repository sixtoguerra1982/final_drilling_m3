import {activeCallAsync, activeView} from './heart.js'
// FUNCION GENERADORA
function* generator(event){
    // activar spinner
    yield activeView(event)

    // elemento padre que genero la accion
    let evento = event.currentTarget
    // Obtener la clase de elemento circulo
    let circle = evento.getElementsByClassName('circle')[0].classList[1]
    // valores en el front para guardar el rango de personajes (DATASET HTML)
    let initiate = parseInt(evento.dataset.initiate)
    let end = parseInt(evento.dataset.end)
    let contentCharacters = document.getElementById('contentcharacters')

    // LLAMADO A LA API y ACTUALIZAR DOM
    yield activeCallAsync(contentCharacters, initiate, end, circle)
}

// CARGA INICIAL
document.addEventListener('DOMContentLoaded', () => {
    // ACTIVAR EVENTOS
    const prompters = document.getElementsByClassName('prompter')
    for (let i = 0; i < prompters.length; i++) {
        let element = prompters[i]
        element.addEventListener('mouseenter' , function(event){
            let g = generator(event)
            g.next(event)
            g.next()
        } ) 
    }
})
