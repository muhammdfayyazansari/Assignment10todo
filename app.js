  
        var list = document.getElementById("list");
        var inpute = document.getElementById("input");
        
      
        function disable(){
            if(input.value !==""){
           var getbutt= document.getElementById("addbtn").disabled = false;
        }
            if(input.value ==""){
           var getbutt= document.getElementById("addbtn").disabled = true;
           alert("Please Enter Any Work")
        }
       
        }
    
        

       function addlist(){
        var user = document.getElementById("input");

        // create and add list item
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        // var tdtext = document.createTextNode(user.value);
        var first = document.createElement("input");
        first.value = user.value;
        first.setAttribute("class","edit")
        first.setAttribute("size","20")
        td.appendChild(first);
        tr.appendChild(td);
       list.appendChild(tr);
        user.value="";
        user.focus();


    //    creat and add delete button
        var deltd = document.createElement("td");
        var del = document.createElement("button");
        var deltext = document.createTextNode("DELETE");
        del.setAttribute("onclick","delet(this)")
        del.setAttribute("class","btn")
        del.appendChild(deltext);
        deltd.appendChild(del)
        tr.appendChild(deltd);



    // creat and add edit button
      var edittd = document.createElement("td");
      var edit =document.createElement("button");
      var edittext = document.createTextNode("EDIT");
      edit.setAttribute("onclick","editfunc(this)")
        edit.setAttribute("class","btn")
        edit.appendChild(edittext);
      edittd.appendChild(edit);
      tr.appendChild(edittd)
        
        }
        
    function delet(a){
        a.parentNode.parentNode.remove()
    }  
    function editfunc(b){
        var useredit = document.createElement("input");
        useredit.setAttribute("class","edit")
       useredit.setAttribute("size","25")
       var firsttd= b.parentNode.parentNode.childNodes[0].appendChild(useredit);
       var fa = b.parentNode.parentNode.childNodes[0].appendChild(useredit).focus()
        var pvalue = b.parentNode.parentNode.childNodes[0].firstChild.nodeValue;
       var insertinput= b.parentNode.parentNode.childNodes[0].firstChild.nodeValue=firsttd.value
       var insertvalue =firsttd.value =pvalue
       
        console.log(pvalue)
        var rem = b.parentNode.parentNode.childNodes[0].firstChild.remove()

    }
    function deletAll(){
        var table = document.getElementsByTagName("tr");
        for(var i=table.length-1; i>=1; i--){
           table[i].remove();
        }
    }
     