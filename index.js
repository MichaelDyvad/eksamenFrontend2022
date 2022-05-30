import { renderTemplate, setActive, showPage } from "./utils.js"
import {clicked} from "./js-for-pages/cyclistCrud.js";
import {calculateShirts} from "./js-for-pages/shirts.js";

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
        //Here you can execute JavaScript for the selected page
        case "page-crud": {
            clicked()
        }
        case "page-shirt": {
            calculateShirts()
            break
        }
        case "page-competition": {
            break
        }
    }
}

document.getElementById("navbar").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render