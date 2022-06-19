export function clicked(){
    document.getElementById("btn-add-cyclist").onclick = addNewCyclist
    document.getElementById("btn-edit-cyclist").onclick = editCyclist
    document.getElementById("btn-delete-cyclist").onclick = deleteCyclist
}

//Adds a new cyclist to database
function addNewCyclist(){
    const cyclistName = document.getElementById("add-cyclist-name").value
    const cyclistAge = document.getElementById("add-cyclist-age").value
    const cyclistMP = document.getElementById("add-cyclist-mountainpoints").value
    const cyclistSP = document.getElementById("add-cyclist-spurtpoints").value
    const cyclistShirt = document.getElementById("add-cyclist-shirtid").value
    const cyclistTeam = document.getElementById("add-cyclist-teamid").value
    const cyclistTime = document.getElementById("add-cyclist-time").value
    const cyclistCountry = document.getElementById("add-cyclist-country").value

    const shirtId = {id: cyclistShirt}
    const teamId = {id: cyclistTeam}

    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/", {
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
            cyclingTeam: teamId,
            time: cyclistTime,
            country: cyclistCountry
        })
    })
}

//Edits cyclist to database
function editCyclist(){
    const cyclistId = document.getElementById("edit-id").value
    const cyclistName = document.getElementById("edit-cyclist-name").value
    const cyclistAge = document.getElementById("edit-cyclist-age").value
    const cyclistMP = document.getElementById("edit-cyclist-mountainpoints").value
    const cyclistSP = document.getElementById("edit-cyclist-spurtpoints").value
    const cyclistShirt = document.getElementById("edit-cyclist-shirtid").value
    const cyclistTeam = document.getElementById("edit-cyclist-teamid").value
    const cyclistTime = document.getElementById("edit-cyclist-time").value
    const cyclistCountry = document.getElementById("edit-cyclist-country").value

    const shirtId = {id: cyclistShirt}
    const teamId = {id: cyclistTeam}

    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistId, {
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
            cyclingTeam: teamId,
            time: cyclistTime,
            country: cyclistCountry
        })
    })

}

//Deletes cyclist on id
function deleteCyclist(){
    const cyclistId = document.getElementById("delete-cyclist-id").value

    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistId, {
        method: "DELETE"
    })
}