import {handleHttpErrors} from "../fetchUtils.js";

export function clickedTeam(){
    document.getElementById("btn-search").onclick = team
}

//Finds a whole team sorted on time
function team(){
    const teamName = document.getElementById("teamname-value").value
    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + teamName)
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
                                <td>${d.id}</td>
                                <td>${d.name}</td>
                                <td>${d.age}</td>
                                <td>${d.mountainPoints}</td>
                                <td>${d.spurtPoints}</td>
                                <td>${d.teamName}</td>
                                <td>${d.time}</td>
                            </tr>
                            `
            ).join("")
            document.getElementById("tbl-body").innerHTML = rows
        })
}