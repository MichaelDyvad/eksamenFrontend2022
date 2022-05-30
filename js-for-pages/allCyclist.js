import {handleHttpErrors} from "../fetchUtils.js";

//Finds all riders, but this methods does not allow more rider with the same time in database
export function allCyclist(){
    fetch("http://localhost:8080/api/cyclist")

        .then(res => handleHttpErrors(res))
        .then(data => {
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
            const rows = arraySorted.map(d =>
                `
                            <tr>
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


        })
}