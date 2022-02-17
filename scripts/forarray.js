var delta=["Vijay","Manoj","Uma","Bhuvana","Hamsaraj","Vimal","Akash","Saran"]



const inserting=()=>{
    const tmp=document.getElementById("users")
    delta.push(tmp.value)
    alert("pushed "+tmp.value)
}

const view=()=>{
    document.write("<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+delta.map((data)=>{document.write("<tr><td>"+data+"</td></tr>")})+"</tbody></table>")
}