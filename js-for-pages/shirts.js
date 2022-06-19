import {handleHttpErrors} from "../fetchUtils.js";

//Finds the right shirt on data, but does not update the foreign key in cyclist entity
export function calculateShirts(){
    fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/")
        .then(res => handleHttpErrors(res))
        .then(data => {
            //reset shirts
            for (let i = 0; i < data.length; i++) {
                let cyclistId = data[i].id
                let shirtIdParsed = {id: 1}
                fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistId, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        shirt: shirtIdParsed
                    })
                })
            }
        })

    document.getElementById("update-shirts").addEventListener("click", ()=> {
        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/")
            .then(res => handleHttpErrors(res))
            .then(data => {
                //Calculates the yellow shirt
                const shirtIdYellow = {id: 2}
                const array = []
                for(let i =0; i<data.length; i++){
                    let dataBestTime = data[i].time
                    array.push(dataBestTime)
                }
                const min = Math.min(...array)
                for(let i =0; i<data.length; i++){
                    if(data[i].time == min){
                        document.getElementById("span-yellow").innerText = data[i].name + ", " + data[i].teamName
                        const cyclistIdOnYellowShirt = data[i].id
                        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistIdOnYellowShirt, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                shirt: shirtIdYellow
                            })
                        })
                    }
                }

                //Calculates the mountain shirt
                const shirtIdMountain = {id: 5}
                const arrayM = []
                for(let i = 0; i < data.length; i++){
                    let mountainBestTime = data[i].mountainPoints
                    arrayM.push(mountainBestTime)
                }
                const maxMountain = Math.max(... arrayM)
                for(let i =0; i < data.length; i++){
                    if(data[i].mountainPoints == maxMountain){
                        document.getElementById("span-mountain").innerText = data[i].name + ", " + data[i].teamName
                        const cyclistIdOnMountainShirt = data[i].id
                        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistIdOnMountainShirt, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                shirt: shirtIdMountain
                            })
                        })
                    }}

                //Calculates the green shirt
                const shirtIdGreen = {id: 4}
                const arrayS = []
                for(let i = 0; i < data.length; i++){
                    let greenBestTime = data[i].spurtPoints
                    arrayS.push(greenBestTime)
                }
                const maxGreen = Math.max(... arrayS)
                for(let i =0; i < data.length; i++){
                    if(data[i].spurtPoints == maxGreen){
                        document.getElementById("span-green").innerText = data[i].name + ", " + data[i].teamName
                        const cyclistIdOnGreenShirt = data[i].id
                        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistIdOnGreenShirt, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                shirt: shirtIdGreen
                            })
                        })
                    }}

                //Calculates the white shirt
                const shirtIdWhite = {id: 3}
                const arrayW = []
                for(let i =0; i<data.length; i++){
                    if(data[i].age < 26){
                        let dataBestTime = data[i].time
                        arrayW.push(dataBestTime)
                    }
                }
                const minW = Math.min(...arrayW)
                for(let i =0; i<data.length; i++){
                    if(data[i].time == minW){
                        document.getElementById("span-white").innerText = data[i].name + ", " + data[i].teamName
                        const cyclistIdOnWhiteShirt = data[i].id
                        fetch("https://tourdefrancewebapp.azurewebsites.net/api/cyclist/" + cyclistIdOnWhiteShirt, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                shirt: shirtIdWhite
                            })
                        })
                    }
                }
            })
    })

}


