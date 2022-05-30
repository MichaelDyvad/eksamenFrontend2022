import { renderTemplate, setActive, showPage } from "./utils.js"


function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
        //Here you can execute JavaScript for the selected page
        case "page-home": {
            break
        }
        case "page-navn": {
            break
        }
    }
}

document.getElementById("navbar").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render