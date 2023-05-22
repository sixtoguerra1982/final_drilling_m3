// Funcion para crear Cards de forma dinamica
const cardCharacter = (circleClass, title, content) => {
    let card = `
    <div class="m-2 efect">
        <div class="card shadow">
            <div class="card-body">
                <div class="row align-items-start">
                    <div class="col-3">    
                        <div class="circle ${circleClass}"></div>
                    </div>
                    <div class="col-9">    
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


const spinner = () => {
    return `
            <div class="d-flex justify-content-center mt-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            `  
}


export {cardCharacter, spinner}