async function DataDisplay()
{
  let TABLE=` 
             <table style="border:3px solid #148F77; border-radius:10px; width:900px;">
                <tr bgcolor="#148F77" style="font-size:20px"> 
                   <td> Book ID </td>
                   <td> Book Title </td>
                   <td> Author</td>
                   <td> Genre</td>
                   <td> Year</td>
                   <td> Quantity</td>
                   <td> Price</td>
                   <td> Update </td>
                 </tr>  
           `;
  let url="http://localhost:3000/managment";
  let fileObj=await  fetch(url);
  let myData = await fileObj.json();
      myData.map((key)=>{
             TABLE+=`
                      <tr style="font-size:20px; font-weight:bolder; background-color:white; color:#1B4F72;"> 
                        <td> ${key.bid} </td>
                        <td> ${key.title} </td>
                        <td> ${key.author} </td>
                        <td> ${key.genre} </td>
                        <td> ${key.year} </td>
                        <td> ${key.quantity} </td>
                        <td> ${key.price} </td>
                        <td> 
                        <a href="#" onclick="DisplayShow(${key.id})">

                             <img src="edit2.jpg" width="30" height="30">
                         </a>
                        </td>

                      </tr>
                  `;        
              });
         TABLE+="</table>";
document.getElementById('demo').innerHTML=TABLE;
}
DataDisplay();

async function DisplayShow(id)
{
	
	let url=`http://localhost:3000/managment/${id}`;

	let fileOBJ= await fetch(url);
	let MYdata= await fileOBJ.json();

	 let Mtab=`<table width="300"> 
                <tr>
                  <td id="insert2"> Book ID:</td>
                  <td> <input type="text" class="input2" value="${MYdata["bid"]}" id="bid"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Book Title: </td>
                  <td> <input type="text" class="input2" value="${MYdata["title"]}" id="title"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Author: </td>
                  <td> <input type="text" class="input2" value="${MYdata["author"]}" id="author"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Genre: </td>
                  <td> <input type="text" class="input2" value="${MYdata["genre"]}" id="genre"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Year: </td>
                  <td> <input type="text" class="input2" value="${MYdata["year"]}" id="year"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Quantity: </td>
                  <td> <input type="text" class="input2" value="${MYdata["quantity"]}" id="qty"></td>
                 </tr>
                 <tr>
                  <td id="insert2"> Price: </td>
                  <td> <input type="text" class="input2" value="${MYdata["price"]}" id="price"></td>
                 </tr>

                 <tr>
                  <td>  </td>
                  <td> <input type="button" style="margin-top:20px;"  class="addbook" value="UPDATE" onclick="EditSave(${MYdata["id"]})"></td>
                 </tr>
                </table> 

	          `;

document.getElementById("demo").style.display="none";
document.getElementById("demo1").innerHTML=Mtab;
}




function EditSave(id)
{
  let bid=document.getElementById("bid").value;
  let title=document.getElementById("title").value;
  let author=document.getElementById("author").value;
  let genre=document.getElementById("genre").value;
  let year=document.getElementById("year").value;    
  let quantity=document.getElementById("qty").value;
  let price=document.getElementById("price").value;
  let url=`http://localhost:3000/managment/${id}`;
fetch(url, {
  method: 'PATCH',

  body: JSON.stringify({
    bid: bid,
    title: title,
    author:author,
    genre:genre,
    year:year,
    quantity:quantity,
    price:price
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
            
            alert("Succesfully updated!!!");
            window.location = "file:///E:/JavaScript/Library%20project/display.html";  

   });


}








