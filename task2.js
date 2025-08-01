function clock1() {
  const row = new Date();

  let hours = row.getHours();
  const minutes = String(row.getMinutes()).padStart(2, '0');
  const seconds = String(row.getSeconds()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  hours = String(hours).padStart(2, '0');

  const String1 = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent = String1;
}

setInterval(clock1, 1000);
clock1();



// function clock1() {
//   const row =  new Date();
//   const hours= String(row.getHours()).padStart(2,'0');
//   const minutes= String(row.getMinutes()).padStart(2,'0');
//   const seconds=String(row.getSeconds()).padStart(2,'0');


//   const String1=`${hours}:${minutes}:${seconds}`;
//   document.getElementById('clock').textContent=  String1;
// }
// setInterval(clock1, 1000);
// clock1(); 



