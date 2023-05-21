async function RecDisplay()
{
    
    var table=`<table  style="border:3px solid #148F77; border-radius:10px; width:1000px;">
    <tr bgcolor="#148F77" style="font-size:20px">
    <th>Book ID</th>
    <th>Book Title</th>
    <th>Author</th>
    <th>Genre</th>
    <th>Year</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Delete</th>
    </tr>`;
    let datainobjectform=await fetch("http://localhost:3000/managment");
    let datainjsonform=await datainobjectform.json()
    datainjsonform.map((element)=>{
    
        table+=`<tr style="font-size:20px; font-weight:bolder; background-color:white; 
            color:#1B4F72;">
        <td>${element.bid}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.genre}</td>
        <td>${element.year}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>
        <td><a href="" onclick=RecDel(${element.id});>
        <img src=th1.jpg width=40 height=40>
        </a></td></tr>`
    });
    table+="</table>"
    document.getElementById("demo").innerHTML=table;
}
RecDisplay();

function RecDel(id)
{
    let url=`http://localhost:3000/managment/${id}`
    fetch(url,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(res=>{
        alert("data deleted")
        window.location.href="http://127.0.0.1:5500/delete.html";
    })
}