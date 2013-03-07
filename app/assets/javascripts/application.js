// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require jquery.purr
//= require best_in_place.purr
//= require best_in_place
//= require_tree .

// name and comment validation

function validateform()
{
var x=document.forms["myForm"]["info[name]"].value;
var y=document.forms["myForm"]["info[city]"].value;
var l=document.forms["myForm"]["info[city]"].value.length;

if (x==null || x=="" )
  {
  alert("First name must be filled out");
  return false;
  }
  if (y==null || y=="")
  {
  alert("Comment must be filled out");
  return false;
  }
  if (l<5)
  {
  alert("Comment must be greater than 5 chars");
  return false;
  }

// email validation

var e=document.forms["myForm"]["info[email]"].value;
var atpos=e.indexOf("@");
var dotpos=e.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }

  // mobile validation

var m=document.forms["myForm"]["info[mobileNo]"].value;

           
 
           if(isNaN(m)||m.indexOf(" ")!=-1)
           {
              alert("Enter numeric value in mobile number")
              return false; 
           }
           if (m.length>10)
           {
                alert("enter 10 characters for mobile number");
                return false;
           }
           if (m.charAt(0)!="9")
           {
                alert("mobile number should start with 9 ");
                return false
           }


}



