function validate(){    
if (document.Form1.password.value == "") {
  alert("Введите пароль");
  document.Form1.password.focus();
  return false;
} 
if (document.Form1.password.value == "din")  {  
window.location.href='autoprgr2.html';
} else  {   
window.location.href='styles/animbukv11.html';
}
}
