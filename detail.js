let ccn3 = new URLSearchParams(location.search).get("ccn3")
let URL_detail = `file:///C:/desktop/API/detail.html?{ccn3}`

let img = document.querySelector("img")
let heading = document.querySelector("h5")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let p5 = document.querySelector(".p5")
let p6 = document.querySelector(".p6")
let p7 = document.querySelector(".p7")
let p8 = document.querySelector(".p8")







fetch(URL_detail)
    .then((resp)=>resp.json())
    .then(data=>{
        img.innerHTML = `${data[i].flags.png}`
        heading.innerHTML = `${data[i].name.common}`
        p1.innerHTML = `Native Name: ${data[i].altSpellings[2]}`
        p2.innerHTML = `Population: ${data[i].population}`
        p1.innerHTML = `Region: ${data[i].region}`
        p1.innerHTML = `Sub Region: ${data[i].subregion}`
        p1.innerHTML = `Capital: ${data[i].capital[0]}`
        p1.innerHTML = `Top Level Domain: ${data[i].tld[0]}`
        p1.innerHTML = `Currencies: ${data[i].currencies}`
        p1.innerHTML = `Languages: ${data[i].languages.fra}`
    })

  



