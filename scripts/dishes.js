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
    localStorage.setItem("menu",JSON.stringify(yet))
    alert(hi+" has added to the menu")
}