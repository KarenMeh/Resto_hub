let printers = [];

function addOrUpdatePrinter() {
    const printerName = document.getElementById("printerName").value;
    const printerIP = document.getElementById("printerIP").value;
    const editIndex = document.getElementById("editIndex").value;

    if (printerName && printerIP) {
        if (editIndex === "") {
            printers.push({ name: printerName, ip: printerIP });
        } else {
            printers[editIndex] = { name: printerName, ip: printerIP };
            document.getElementById("editIndex").value = ""; // Reset edit index
        }

        document.getElementById("printerForm").reset();
        renderPrinterList();
    }
}

function renderPrinterList() {
    const printerList = document.getElementById("printerList");
    printerList.innerHTML = "";

    printers.forEach((printer, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        listItem.innerHTML = `
            <span>${printer.name} - ${printer.ip}</span>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="editPrinter(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="removePrinter(${index})">Delete</button>
            </div>
        `;
        printerList.appendChild(listItem);
    });
}

function editPrinter(index) {
    document.getElementById("printerName").value = printers[index].name;
    document.getElementById("printerIP").value = printers[index].ip;
    document.getElementById("editIndex").value = index;
}

function removePrinter(index) {
    printers.splice(index, 1);
    renderPrinterList();
}

function saveSettings() {
    const systemName = document.getElementById("systemName").value;
    const version = document.getElementById("version").value;
  
    console.log("System Settings Saved:", { systemName, version });
    alert("Settings saved successfully!");
}