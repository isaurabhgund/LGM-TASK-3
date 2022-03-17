var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["Name"] = document.getElementById("Name").value;
  formData["UID"] = document.getElementById("UID").value;
  formData["CourseName"] = document.getElementById("CourseName").value;
  formData["age"] = document.getElementById("age").value;
  formData["gender"] = document.getElementById("gender").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.UID;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.CourseName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.age;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("UID").value = selectedRow.cells[1].innerHTML;
  document.getElementById("CourseName").value = selectedRow.cells[2].innerHTML;
  document.getElementById("age").value = selectedRow.cells[3].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.Name;
  selectedRow.cells[1].innerHTML = formData.UID;
  selectedRow.cells[2].innerHTML = formData.CourseName;
  selectedRow.cells[3].innerHTML = formData.age;
  selectedRow.cells[4].innerHTML = formData.gender;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("Name").value = "";
  document.getElementById("UID").value = "";
  document.getElementById("CourseName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  selectedRow = null;
}