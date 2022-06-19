import {handleHttpErrors} from "../fetchUtils.js";

//Finds all riders, but this methods does not allow more rider with the same time in database
export function allCyclist(){
        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist")

            .then(res => handleHttpErrors(res))
            .then(data => {
                let dataSorted = data.sort((a, b) => (a.time) - (b.time))
                /*
                const array = []
                const arraySorted = []
                for(let i = 0; i < data.length; i++){
                    let dataTime = data[i].time
                    array.push(dataTime)
                }
                array.sort()
                for(let i = 0; i < data.length; i++){
                    for(let j = 0; j < data.length; j++){
                        if(data[j].time == array[i]){
                            arraySorted.push(data[j])
                        }
                    }
                }
                 */
                const rows = dataSorted.map(d =>
                    `
                            <tr>
                                <button id="${d.id}">Slet Rytter</button>
                                <td>${d.name}</td>
                                <td>${d.age}</td>
                                <td>${d.mountainPoints}</td>
                                <td>${d.spurtPoints}</td>
                                <td>${d.teamName}</td>
                                <td>${d.time}</td>
                                <td>${d.shirt}</td>
                                <td>${d.country}</td>
                            </tr>
                            `
                ).join("")
                document.getElementById("tbl-body-all").innerHTML = rows
                document.getElementById("tbl-body-all").onclick = slet

            })
}

function slet(event){
    const id = event.target.id

    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + id, {
        method: "DELETE"
    })
}