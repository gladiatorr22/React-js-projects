

function customrender(reactElement,container){
    /*
    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.Children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)
    container.appendChild(domelement)
    */

    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue;
        domelement.setAttribute(prop,reactElement.props[prop])  
    }
    container.appendChild(domelement)

}


const reactElement={
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    Children:'click to visit google'
}

const mainContainer = document.querySelector('#root')
customrender(reactElement,mainContainer)