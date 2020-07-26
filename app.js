var lst=document.getElementById("list");
function addtodo(){
    var item=document.getElementById("todoitem").value;
    var li=document.createElement("li");
    var litext=document.createTextNode(item);
    if(item===""){alert("please be filled this field ")}
    else{
    li.appendChild(litext);}
    
    var editbtn =document.createElement("button");
    var edittext =document.createTextNode("Edit");
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","onEdit(this)");
    li.appendChild(editbtn);
    if(item===""){ alert("Please be filled this field! ")}
    else{lst.appendChild(li);}
    
    todoitem.value="";
    console.log(li)
    var delbtn =document.createElement("button");
    var deltext =document.createTextNode("Delete");
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class","btnn");
    delbtn.setAttribute("onclick","onDelete(this)");
    li.appendChild(delbtn);
    lst.appendChild(li);
    todoitem.value="";
    console.log(li)
    



}
function delall(){
    lst.innerHTML="";
    

}
function onDelete(e){
    //e.parentNodes.remove()
    e.parentNode.remove();
    
}





function onEdit(e){
    var val=prompt("What to do next?",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=val;

    



}

