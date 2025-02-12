 // Function to set current date and time in the format "Sun Jan 26, 2025 12:00 AM"
 function setFormattedDateTime() {
    const date = new Date();

    // Format the date to the desired format: "Sun Jan 26, 2025 12:00 AM"
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const formattedDateTime = date.toLocaleString('en-US', options);

    // Update the date and time for each row
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
        const datetimeSpan = row.querySelector('.datetime');
        if (datetimeSpan) {
            datetimeSpan.innerText = formattedDateTime;
        }
    });
}

// Call the function to set the formatted date and time immediately when the page loads
setFormattedDateTime();
// Update every minute to keep the time current
setInterval(setFormattedDateTime, 60000);


// Calendar for sales
document.getElementById("dateFilter").addEventListener("change", function() {
    let selectedDate = this.value; // Get the selected date
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let dateCell = row.querySelector(".datetime"); // Assuming date is stored in .datetime
        if (dateCell) {
            let rowDate = dateCell.textContent.trim(); // Get the text inside date cell
            let formattedRowDate = formatDate(rowDate); // Convert to YYYY-MM-DD format
            
            // Show or hide rows based on selected date
            row.style.display = (formattedRowDate === selectedDate || selectedDate === "") ? "" : "none";
        }
    });
});

// Function to format "Sun Jan 26, 2025 12:00 AM" into "YYYY-MM-DD"
function formatDate(dateString) {
    let dateObj = new Date(dateString);
    if (isNaN(dateObj)) return ""; // Return empty if invalid date
    return dateObj.toISOString().split("T")[0]; // Get YYYY-MM-DD format
}
