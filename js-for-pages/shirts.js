
export function calculateShirts(){

    fetch("http://localhost:8080/api/cyclist")
        .then(res => res.json())
        .then(data => {
            //Calculates the yellow shirt
            const array = []
            for(let i =0; i<data.length; i++){
                let dataBestTime = data[i].time
                array.push(dataBestTime)
            }
            const min = Math.min(...array)
            for(let i =0; i<data.length; i++){
                if(data[i].time == min){
                    document.getElementById("span-yellow").innerText = data[i].name + ", " + data[i].teamName
                }
            }

            //Calculates the mountain shirt
            const arrayM = []
            for(let i = 0; i < data.length; i++){
                let mountainBestTime = data[i].mountainPoints
                arrayM.push(mountainBestTime)
            }
            const maxMountain = Math.max(... arrayM)
            for(let i =0; i < data.length; i++){
                if(data[i].mountainPoints == maxMountain){
                    document.getElementById("span-mountain").innerText = data[i].name + ", " + data[i].teamName
                }}

            //Calculates the green shirt
            const arrayS = []
            for(let i = 0; i < data.length; i++){
                let greenBestTime = data[i].spurtPoints
                arrayM.push(greenBestTime)
            }
            const maxGreen = Math.max(... arrayM)
            for(let i =0; i < data.length; i++){
                if(data[i].spurtPoints == maxGreen){
                    document.getElementById("span-green").innerText = data[i].name + ", " + data[i].teamName
                }}

            //Calculates the white shirt
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
                }
            }
        })



}


