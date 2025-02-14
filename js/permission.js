function openModal(employeeName) {
    document.getElementById("employeeName").innerText = "Modify Permissions for " + employeeName;
    document.getElementById("passcode").value = "";
    document.getElementById("cancelInvoice").checked = false;
    document.getElementById("cancelOrder").checked = false;
    document.getElementById("viewZReport").checked = false;
    new bootstrap.Modal(document.getElementById("employeeModal")).show();
}

function saveEmployeeSettings() {
    alert("Permissions updated successfully!");
    new bootstrap.Modal(document.getElementById("employeeModal")).hide();
}