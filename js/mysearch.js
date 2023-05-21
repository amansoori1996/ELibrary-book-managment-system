document.getElementById('btn').addEventListener("click",Mysearch);

async function Mysearch()
{
	let MyTable=`<table style="border:4px solid black; border-radius:10px; width:550px;">
						<tr bgcolor="cyan" style="font-size:20px">
						<td>Book ID</td>
						<td>Book Title</td>
						<td>Author</td>
						<td>Genre</td>
						<td>Year</td>
						<td>Quantity</td>
						<td>Price</td>
						</tr>
						`;

let bid=document.getElementById('bid').value;
let url=`http://localhost:3000/managment/?bid=${bid}`;
let fileObj=await fetch(url);
let Mydata=await fileObj.json();
	if(Mydata.length>0)
	{
		Mydata.map((key)=>{
			MyTable+=`<tr style="font-size:20px; font-weight:bolder; background-color:white; 
			color:#1B4F72;">
			<td>${key.bid}</td>
			<td>${key.title}</td>
			<td>${key.author}</td>
			<td>${key.genre}</td>
			<td>${key.year}</td>
			<td>${key.quantity}</td>
			<td>${key.price}</td>
			</tr>
			`;
		});
		MyTable+="</table>";
		document.getElementById("demo").innerHTML=MyTable;
	}
	else 
	{
		document.getElementById("demo").innerHTML="<font color='green'>No Record Found</font>";
	}						
}