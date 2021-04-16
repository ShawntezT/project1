// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

// class TemplateExample extends HTMLElement {
//     constructor(){
//         super()

//         this.innerHTML = `<h1>Hello World</h1>`
//     }
// }



// /////////////////////////////////
// // Register the HTML Tag here
// /////////////////////////////////

// customElements.define("template-example", TemplateExample)
class MyCard extends HTMLElement {
    constructor(){
        super()
        const project = this.getAttribute("project")
        const git = this.getAttribute("git")
        const img = this.getAttribute("img")
        const live = this.getAttribute("live")
        const description = this.getAttribute("description")
        this.innerHTML = `
        <sl-card>
        <img src = ${img} alt = ${project}>
        <h2>${project}</h2>
        <p>${description}</p>
        <sl-button-group>
        <sl-button>${git}</sl-button></a>
        <sl-button>${live}</sl-button>
        </sl-button-group>
        </sl-card>`
    }
}

customElements.define("my-card", MyCard)