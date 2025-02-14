function navigateToEdit(employeeName) {
    const encodedName = encodeURIComponent(employeeName);
    window.location.href = `edit_employee.html?name=${encodedName}`;
}


function saveEmployeeSettings() {
    alert("Permissions updated successfully!");
}

function goBack() {
    window.location.href = "permission_pages.html";
}

// Extract employee name from URL and display it
function getEmployeeNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeName = urlParams.get("name");
    if (employeeName) {
        document.getElementById("employeeName").innerText = "Modify Permissions for " + decodeURIComponent(employeeName);
    }
}

getEmployeeNameFromURL();