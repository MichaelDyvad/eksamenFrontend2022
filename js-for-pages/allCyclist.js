//Finds all riders, but this methods does not allow more rider with the same time
export function allCyclist(){
    fetch("http://localhost:8080/api/cyclist")

        .then(res => res.json())
        .then(data => {
            const array = []
            const arraySorted = []
            for(let i = 0; i < data.length; i++){
                let dataTime = data[i].time
                array.push(dataTime)
            }
            array.sort()
            console.log(data)
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < data.length; j++){
                    if(data[j].time == array[i]){
                        console.log(data[j])
                        arraySorted.push(data[j])
                    }
                }
            }
            console.log(arraySorted)
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