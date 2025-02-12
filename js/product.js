  // Function to search the table
  function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("productTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows (skipping the header)
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        if (td) {
            txtValue = "";
            for (var j = 0; j < td.length - 1; j++) {  // Skip last column (actions)
                txtValue += td[j].textContent || td[j].innerText;
            }
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Function to sort the table by column index
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("productTable");
    switching = true;
    dir = "asc"; // Set the sorting direction to ascending

    // Keep looping until no switching is needed
    while (switching) {
        switching = false;
        rows = table.rows;

        // Loop through all table rows (except the header)
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // Compare two rows based on direction
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch is found, make the switch and mark that a switch was done
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            // If no switching has been done, switch the sorting direction
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// JavaScript to handle adding a new product
document.getElementById('addProductBtn').addEventListener('click', function() {
    // Get values from the input fields
    const productName = document.getElementById('productName').value.trim();
    const productDescription = document.getElementById('productDescription').value.trim();
    const productPrice = document.getElementById('productPrice').value.trim();
  
    // Validate input
    if (productName && productDescription && productPrice) {
      // Create a new row for the table
      const tableBody = document.getElementById('productTableBody');
      const newRow = tableBody.insertRow();
  
      // Insert cells for the new product
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
  
      // Add product data to the new row
      cell1.innerHTML = productName;
      cell2.innerHTML = productDescription;
      cell3.innerHTML = productPrice;
      cell4.innerHTML = `
        <div class="btn-group" role="group">
          <button class="btn btn-primary btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
      `;
  
      // Close the Add Product modal
      $('#addProductModal').modal('hide');
  
      // Clear input fields for the next product
      document.getElementById('productName').value = '';
      document.getElementById('productDescription').value = '';
      document.getElementById('productPrice').value = '';
    } else {
      alert('Please fill out all fields.');
    }
  });
  