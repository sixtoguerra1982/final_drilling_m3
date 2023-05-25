// Leer Valor de Propiedad CSS
const getPropertyCss = (element, cssname) => {
    let elementStyle = getComputedStyle(element)
    let valueCss = elementStyle.getPropertyValue(cssname)
    return valueCss
}

export {getPropertyCss}