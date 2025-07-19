function customRender(reactElement, container) {
    
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)


    document.createElement(reactElement.type)
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for(const prop in reactElement.props){
        if(prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    Children:'Click here to go to Google',
}
const mainContainer=document.querySelector('#root') 

customRender(reactElement,mainContainer)

