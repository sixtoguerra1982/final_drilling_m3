// Leer Valor de Propiedad CSS
const getPropertyCss = (element, cssname) => {
    let elementStyle = getComputedStyle(element)
    let display = elementStyle.getPropertyValue(cssname)
    return display
}

export {getPropertyCss}