document.getElementById('nm').addEventListener("keyup",Searchname);
async function Searchname()
{
	let myhtml=`<table style="border:4px solid black; border-radius:10px; width:550px;">
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

let nm=document.getElementById("nm").value;
	nm=nm.toLowerCase();
let url=`http://localhost:3000/managment`;
let fileObj=await fetch(url);
let Mydata=await fileObj.json();
	Mydata.map((key)=>{
			let Myname=key.title;
				Myname=Myname.toLowerCase();
			let MyStatus=Myname.includes(nm);
			
			if(MyStatus==true)
			{
				myhtml+=`<tr style="font-size:20px; font-weight:bolder; background-color:white; 
			color:#1B4F72;">
				<td> ${key.bid}</td>
				<td> ${key.title}</td>
				<td> ${key.author}</td>
				<td> ${key.genre}</td>
				<td> ${key.year}</td>
				<td> ${key.quantity}</td>
				<td> ${key.price}</td>
				</tr>
				`;

			}	
	});
	myhtml+="</table>";
	document.getElementById("demo").innerHTML=myhtml;
}