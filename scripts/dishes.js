const begin=()=>{
    hey={"foods":["dosa","idly"]}
    localStorage.setItem("menu",JSON.stringify(hey))
    alert("Menu item initialized")
}

const adding=()=>{
    let hi=document.getElementById("item").value
    var tmp=localStorage.getItem("menu")
    console.log(tmp)
    var yet=JSON.parse(tmp)
    alert(yet)
    alert(yet["foods"]+" before push")
    yet["foods"].push(hi)
    alert(yet["foods"]+" after push")
    //localStorage.setItem("foods",)
    localStorage.setItem("menu",JSON.stringify(yet))
    alert(hi+" has added to the menu")
}

const display=()=>{
    let wind=JSON.parse(localStorage.getItem("menu"))
    let collect=""
    
    wind["foods"].map((data,index)=>{
        collect+="<tr><td>"+ data +"</td></tr>"
    })
    
    var place=document.getElementById("template")

    place.innerHTML="<table border='1px' style='text-align:center;box-shadow:3px 3px 3px blue;'><thead><tr><th>TN54 menu</th></tr></thead><tbody>"+collect+"</tbody></table>"
}

const er=()=>{
    let hi=document.getElementById("item").value
    alert(localStorage.getItem("menu"))
    wind=JSON.parse(localStorage.getItem("menu"))
    alert(wind)
    wind=wind["foods"].filter((data,pos)=>{
        return data!==wind["foods"][hi]
    })
    localStorage.setItem("menu",JSON.stringify(wind))
}