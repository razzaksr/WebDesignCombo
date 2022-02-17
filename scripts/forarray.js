var delta=["Vijay","Manoj","Uma","Bhuvana","Hamsaraj","Vimal","Akash","Saran"]



const inserting=()=>{
    const tmp=document.getElementById("users")
    delta.push(tmp.value)
    alert("pushed "+tmp.value)
}

const view=()=>{
    var hi=""
    delta.map((data)=>
    {   
        hi+="<tr><td>"+data+"</td></tr>"
    })
    var t=document.getElementById("present")
    //document.write("<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+delta.map((data)=>{document.write("<tr><td>"+data+"</td></tr>")})+"</tbody></table>")
    t.innerHTML="<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+hi+"</tbody></table>"
}