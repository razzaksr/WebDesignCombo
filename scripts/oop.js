function show()
{
    with(this)
    {
        hey=""
        skills.map((data)=>{
            hey+=data+" "
        })
        return "Resource details: "+name+","+location+","+commercials+","+hey
    }
}
function Resources(nm,sk,area,pay)
{
    this.name=nm
    this.skills=sk
    this.location=area
    this.commercials=pay
    this.show=show
}

function manage()
{
    this.team=new Array()
    this.display=view
    this.add=ins
    this.byPerDay=commerSe
    this.upbyPos=upbyPos
}

function upbyPos(pos)
{
    with(this)
    {
        if(pos<team.length)
        {
            alert(team[pos].show()+" selected resource")
            var what=prompt("Tell us what to update: ","")
            switch (what) 
            {
                case "name":
                    var n=prompt("Tell us new name: ","")
                    team[pos].name=n
                    break;
                case "location":
                    var l=prompt("Tell us new location: ","")
                    team[pos].location=l
                    break
                case "commercials":
                    var c=prompt("Tell us new commercials: ","")
                    team[pos].commercials=c
                    break
                case "skills":
                    var wish=prompt("Are you wish to add or update: ","")
                    switch (wish) {
                        case "add":
                            var newone=prompt("Tell us new skill wish to add: ","")
                            team[pos].skills.push(newone)
                            alert(newone+" has added")
                            break;
                        case "update":
                            var s=prompt("Tell us what to replace: ","")
                            var d=prompt("Tell us update one for "+s,"")
                            team[pos].skills=team[pos].skills.filter((data,pos)=>{
                                return data!==s
                            })
                            team[pos].skills.push(d)
                            break
                        default:
                            break;
                    }
                default:
                    break;
            }
            alert(what+" has updated")
        }
        else{
            alert("Invalid "+pos+" position")
        }
    }
}

function commerSe(user)
{
    with(this)
    {
        team.map((data)=>{
            if(data.commercials>=user)
                alert(data.show())
        })
    }
}

function ins(res)
{
    with(this)
    {
        team.push(res)
        alert(res.name+" REsource has added")
    }
}

function view()
{
    with(this)
    {
        team.map((obj)=>{
            alert(obj.show())
        })
    }
}