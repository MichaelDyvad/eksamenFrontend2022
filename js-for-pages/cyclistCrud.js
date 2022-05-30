import{handleHttpErrors} from "../fetchUtils.js";

export function clicked(){
    document.getElementById("btn-add-cyclist").onclick = addNewCyclist
    document.getElementById("btn-edit-cyclist").onclick = editCyclist
    document.getElementById("btn-delete-cyclist").onclick = deleteCyclist
}


function addNewCyclist(){
    const cyclistName = document.getElementById("add-cyclist-name").value
    const cyclistAge = document.getElementById("add-cyclist-age").value
    const cyclistMP = document.getElementById("add-cyclist-mountainpoints").value
    const cyclistSP = document.getElementById("add-cyclist-spurtpoints").value
    const cyclistShirt = document.getElementById("add-cyclist-shirtid").value
    const cyclistTeam = document.getElementById("add-cyclist-teamid").value

    const shirtId = {id: cyclistShirt}
    const teamId = {id: cyclistTeam}

    fetch("http://localhost:8080/api/cyclist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: cyclistName,
            age: cyclistAge,
            mountainPoints: cyclistMP,
            spurtPoints: cyclistSP,
            shirt: shirtId,
            cyclingTeam: teamId
        })
    })
}

function editCyclist(){
    const cyclistId = document.getElementById("edit-id").value
    const cyclistName = document.getElementById("edit-cyclist-name").value
    const cyclistAge = document.getElementById("edit-cyclist-age").value
    const cyclistMP = document.getElementById("edit-cyclist-mountainpoints").value
    const cyclistSP = document.getElementById("edit-cyclist-spurtpoints").value
    const cyclistShirt = document.getElementById("edit-cyclist-shirtid").value
    const cyclistTeam = document.getElementById("edit-cyclist-teamid").value

    const shirtId = {id: cyclistShirt}
    const teamId = {id: cyclistTeam}

    fetch("http://localhost:8080/api/cyclist/" + cyclistId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: cyclistName,
            age: cyclistAge,
            mountainPoints: cyclistMP,
            spurtPoints: cyclistSP,
            shirt: shirtId,
            cyclingTeam: teamId
        })
    }).then(res => res.json())
}

function deleteCyclist(){
    const cyclistId = document.getElementById("delete-cyclist-id").value

    fetch("http://localhost:8080/api/cyclist/" + cyclistId, {
        method: "DELETE"
    })
}