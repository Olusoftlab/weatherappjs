const formEl = document.querySelector("form")
const inputEl = document.getElementById("city-name")
const firstEl = document.getElementById("myfetch")
const secEl = document.getElementById("myfetch-2")
const thirdEL = document.getElementById("myfetch-3")
const fourthEl = document.getElementById("myfetch-4")



formEl.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        const response = await fetch("http://localhost:8000/data", {
            method: "POST",

            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ city: inputEl.value })

        })

        const data = await response.json()

        inputEl.value = ""

        firstEl.innerText = ` ${data.weather[0].description}`
        secEl.innerText = `${data.main.humidity}`
        thirdEL.innerText = ` ${data.main.temp_min}`
        fourthEl.innerText = ` ${data.main.temp_max}`




    } catch (error) {

        console.log(error)

    }



})