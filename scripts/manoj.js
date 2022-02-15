function check()
{
    let hai=document.getElementsByTagName('th')
    for(i=0;i<hai.length;i++)
    {
        hai[i].style.backgroundColor='maroon'
        hai[i].style.color='white'
    }
}
function outting()
{
    let hai=document.getElementsByTagName('th')
    for(i=0;i<hai.length;i++)
    {
        hai[i].style.backgroundColor='white'
        hai[i].style.color='maroon'
    }
}