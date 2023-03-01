function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var fname=document.getElementById("fname_row"+no);
 var lname=document.getElementById("lname_row"+no);
 var email=document.getElementById("email_row"+no);
 var address=document.getElementById("address_row"+no);
 var bday=document.getElementById("bday_row"+no);
 var pno=document.getElementById("pno_row"+no);
 var course=document.getElementById("course_row"+no);
	
 var fname_data=fname.innerHTML;
 var lname_data=lname.innerHTML;
 var email_data=email.innerHTML;
 var address_data=address.innerHTML;
 var bday_data=bday.innerHTML;
 var pno_data=pno.innerHTML;
 var course_data=course.innerHTML;

	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 lname.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 address.innerHTML="<input type='text' id='address_text"+no+"' value='"+address_data+"'>";
 bday.innerHTML="<input type='text' id='bday_text"+no+"' value='"+bday_data+"'>";
 pno.innerHTML="<input type='text' id='pno_text"+no+"' value='"+pno_data+"'>";
 course.innerHTML="<input type='text' id='course_text"+no+"' value='"+course_data+"'>";


}

function save_row(no)
{
 var fname_val=document.getElementById("fname_text"+no).value;
 var lname_val=document.getElementById("lname_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var address_val=document.getElementById("address_text"+no).value;
 var bday_val=document.getElementById("bday_text"+no).value;
 var pno_val=document.getElementById("pno_text"+no).value;
 var course_val=document.getElementById("course_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 document.getElementById("lname_row"+no).innerHTML=lname_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("address_row"+no).innerHTML=address_val;
 document.getElementById("bday_row"+no).innerHTML=bday_val;
 document.getElementById("pno_row"+no).innerHTML=pno_val;
 document.getElementById("course_row"+no).innerHTML=course_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_fname=document.getElementById("new_fname").value;
 var new_lname=document.getElementById("new_lname").value;
 var new_email=document.getElementById("new_email").value;
 var new_address=document.getElementById("new_address").value;
 var new_bday=document.getElementById("new_bday").value;
 var new_pno=document.getElementById("new_pno").value;
 var new_course=document.getElementById("new_course").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='fname_row"+table_len+"'>"+new_fname+"</td><td id='lname_row"+table_len+"'>"+new_lname+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='address_row"+table_len+"'>"+new_address+"</td><td id='bday_row"+table_len+"'>"+new_bday+"</td><td id='pno_row"+table_len+"'>"+new_pno+"</td><td id='course_row"+table_len+"'>"+new_course+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_fname").value="";
 document.getElementById("new_lname").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_address").value="";
 document.getElementById("new_bday").value="";
 document.getElementById("new_pno").value="";
 document.getElementById("new_course").value="";
}


var rlead,
row = document.getElementById("row")
function checkEmptyInput()
{
   var isEmpty = false,
       fname = document.getElementById("fname").value,
       lname = document.getElementById("lname").value,
       email = document.getElementById("email").value;
       address = document.getElementById("address").value;
       pno = document.getElementById("pn0").value;
       course = document.getElementById("courses").value;

   if(fname === ""){
       alert("First Name Connot Be Empty");
       isEmpty = true;
   }
   else if(lname === ""){
       alert("Last Name Connot Be Empty");
       isEmpty = true;
   }
   else if(email === ""){
       alert("Email Connot Be Empty");
       isEmpty = true;
   }
   else if(address === ""){
       alert("address Connot Be Empty");
       isEmpty = true;
   }
   else if(pno === ""){
       alert("Phone Connot Be Empty");
       isEmpty = true;
   }
   return isEmpty;
}
