var a=document.getElementById("addbtn");
a.addEventListener("click", myfunction)
function myfunction () {
   //Getting the users input
   const input = document.getElementById("taskInput");
   const taskText = input.value.trim();
   //ignore the empty spaces
  if (taskText === "") return;
  
  
  // creating new list
  const li = document.createElement("li");
  li.textContent = taskText;

  
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

    // creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
     //Add delete functionality
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  input.focus();
};




