var month=0;
var salary=0;



function addnewrow()
{
    if ( month <= 11) {    
        month = month + 1 ;
        salary = salary + 10000 ;
        $("#mytable").append("<tr> <th> "+ month +" </th><th> "+ salary +" </th></tr>");
    }
    else { 
        alert ('Month cannot be greaterthan 12');
    }
}

