let row = document.querySelector(".row")
let card = document.querySelector(".card-body")
let input = document.querySelector("input")
let list = document.querySelector("ul")
input.setAttribute("placeholder","Search for a country...")
let API = "https://restcountries.com/v3.1/all"


fetch(API)
    .then((response) => response.json())
    .then((data) => { 
        for (let i = 0; i < data.length; i++) {
            row.innerHTML += `  <div class="col-3 mt-5">
            <div class="card" style="width: 100%;height:100%">
                <img src="${data[i].flags.png}" class="card-img-top" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;width:100%;height:200px">
                <div class="card-body">
                  <h5 class="card-title"><a href="detail.html?ccn3=${data[i].ccn3}" target="_blank"><li>${data[i].name.common}</li></a></h5>
                  <p class="card-text">Population: ${data[i].population}</p>
                  <p class="card-text">Region: ${data[i].region}</p>
                  <p class="card-text">Capital: ${data[i].capital}</p>
                </div>
              </div>
        </div>`
        }
    })
//input search
input.addEventListener("keyup",()=>{
fetch(API)
.then((resp) => resp.json())
.then((data)=>{
    list.innerHTML = "";
   for (let i = 0; i < data.length; i++) {
    if (data[i].name.common.toLowerCase().includes(input.value.toLowerCase())) {
        list.innerHTML += `<a href="detail.html?ccn3=${data[i].ccn3}" target="_blank"><li>${data[i].name.common}</li></a>`
    }
   }
})
})










