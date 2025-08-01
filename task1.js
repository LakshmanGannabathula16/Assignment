var a=document.getElementById('themeToggle');
a.addEventListener('click',myFunction);
var b=document.getElementById('aboutbtn');
b.addEventListener('click',mysecondfunction);
var c=document.getElementById('skillsbtn');
c.addEventListener('click',mythirdfunction);
var d=document.getElementById('projectsbtn');
d.addEventListener('click',myfourthfunction);
var e=document.getElementById('contactbtn');
e.addEventListener('click',mylastfunction);


function myFunction(){
  document.body.classList.toggle('dark');
}
function mysecondfunction(){
    document.getElementById('About').scrollIntoView({behaviour:'smooth'});
}
function mythirdfunction(){
    document.getElementById('Skills').scrollIntoView({behaviour:'smooth'});
}
function myfourthfunction(){
    document.getElementById('Projects').scrollIntoView({behaviour:'smooth'});
}
function mylastfunction(){
    document.getElementById('Contact').scrollIntoView({behaviour:'smooth'});
}

