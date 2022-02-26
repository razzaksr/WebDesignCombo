const perform=()=>{
    const a=document.forms['two'].fname.value
    const b=document.forms['two'].lname.value
    const c=document.forms['two'].dob.value
    const d=document.forms['two'].gender.value
    const e=document.forms['two'].pass.value
    const f=document.forms['two'].news.checked
    const g=document.forms['two'].optional.checked
    let ack=true

    // if(a.length>0&&b.length>0&&c.length>0&&e.length>0)
    // {
    //     ack=true
    // }

    if(a.length<=0)
    {
        document.getElementById("ferror").innerHTML="First name shouldn't empty"
        ack=false
    }
    if(b.length<=0)
    {
        document.getElementById("lerror").innerHTML="Last name shouldn't empty"
        ack=false
    }

    if(!(/^[a-zA-Z]/).test(a)&&!(/^[a-zA-Z]/).test(b))
    {
        document.getElementById("ferror").innerHTML="First name shouldn't numberical"
        document.getElementById("lerror").innerHTML="Last name shouldn't numerical"
        ack=false
    }
    if(d=="")
    {
        document.getElementById("gerror").innerHTML="Gender must be selected"
        ack=false
    }
    if(f!=true||g!=true)
    {
        ack=false
    }

    return ack

}