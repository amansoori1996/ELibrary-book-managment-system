async function Display()
{
    
    var table=`<table style="border:3px solid #148F77; border-radius:10px; width:900px;">
    <tr bgcolor="#148F77" style="font-size:20px;">
    <th>Book ID</th>
    <th>Book Title</th>
    <th>Author</th>
    <th>Genre</th>
    <th>Year</th>
    <th>Quantity</th>
    <th>Price</th>
    </tr>`;
    let datainobjectform=await fetch("http://localhost:3000/managment");
    let datainjsonform=await datainobjectform.json()
    datainjsonform.map((element)=>{
    
        table+=`<tr style="font-size:20px; font-weight:bolder; background-color:white; color:#922B21;">
        
        <td>${element.bid}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.genre}</td>
        <td>${element.year}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>
        </tr>`

    });
    table+="</table>"
    document.getElementById("demo").innerHTML=table;
}
Display();