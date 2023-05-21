document.getElementById("insert-btn").addEventListener("click",InsertData);
document.getElementById('clear').addEventListener("click",clearAll);

function InsertData()
{
let bid=document.getElementById("bid").value;    
let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let genre=document.getElementById("genre").value;
let year=document.getElementById("year").value;
let qty=document.getElementById("qty").value;
let prc=document.getElementById("prc").value;
let url="http://localhost:3000/managment";
fetch
(
    url,
    {
        method:"POST",
        body:JSON.stringify(
        {   bid:bid,
            title:title,
            author:author,
            genre:genre,
            year:year,
            quantity:qty,
            price:prc
        }
        ),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    }
    ).then(response=>response.json())
    .then(alert("Book Save!!"))
    // ).then((response)=>{return response.json()})
    // .then((value)=>{console.log(value)})


}

function clearAll()
{
    document.getElementById("bid").value="";
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("genre").value="";
    document.getElementById("year").value="";
    document.getElementById("qty").value="";
    document.getElementById("prc").value="";
    document.getElementById('bid').focus();
}