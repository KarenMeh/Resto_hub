let selectedCard = null;

function attachCardEvents(card) {
    card.addEventListener("click", function () {
        selectedCard = this.querySelector(".card-title");
        document.getElementById("cardTitleInput").value = selectedCard.textContent;
    });
}

document.querySelectorAll(".card-item").forEach(card => {
    attachCardEvents(card);
});

document.getElementById("addCardBtn").addEventListener("click", function () {
    let cardContainer = document.getElementById("cardContainer");

    let newCard = document.createElement("div");
    newCard.classList.add("col-12", "col-md-3", "mb-4", "card-item");
    newCard.setAttribute("data-bs-toggle", "modal");
    newCard.setAttribute("data-bs-target", "#editModal");

    newCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">New Table</h5>
            </div>
        </div>
    `;

    cardContainer.appendChild(newCard);
    attachCardEvents(newCard);
});





 // For TAB
 
 let tabCounter = 3; // Start from 3 since we already have Tab 1 and 2

 function addTab() {
     const tabId = `tab${tabCounter}`;
     const tabContentId = `content${tabCounter}`;

     // Create new tab
     const newTab = document.createElement('li');
     newTab.classList.add('nav-item');
     newTab.setAttribute('role', 'presentation');

     newTab.innerHTML = `
         <a class="nav-link" id="${tabId}-tab" data-bs-toggle="tab" href="#${tabContentId}" role="tab" aria-controls="${tabContentId}" aria-selected="false">
             <span class="tab-text">New Tab ${tabCounter}</span>
         </a>
     `;

     document.getElementById('myTabs').insertBefore(newTab, document.getElementById('add-tab').parentNode);

     // Create new tab content
     const newContent = document.createElement('div');
     newContent.classList.add('tab-pane', 'fade');
     newContent.setAttribute('id', tabContentId);
     newContent.setAttribute('role', 'tabpanel');
     newContent.setAttribute('aria-labelledby', `${tabId}-tab`);
     newContent.innerHTML = `Content for New Tab ${tabCounter}`;

     document.getElementById('myTabContent').appendChild(newContent);

     // Attach rename event to the new tab
     attachRenameEvent(newTab);

     tabCounter++;
 }

 function attachRenameEvent(tabElement) {
     const tabText = tabElement.querySelector('.tab-text');

     tabText.addEventListener('dblclick', function () {
         let currentText = tabText.textContent;
         let input = document.createElement('input');
         input.type = 'text';
         input.value = currentText;
         input.classList.add('form-control');
         input.style.width = '100px';

         // Replace text with input field
         tabText.replaceWith(input);
         input.focus();

         function saveRename() {
             tabText.textContent = input.value.trim() || currentText; // If empty, keep old name
             input.replaceWith(tabText);
         }

         // Save when Enter is pressed or input loses focus
         input.addEventListener('keypress', function (event) {
             if (event.key === 'Enter') {
                 saveRename();
             }
         });

         input.addEventListener('blur', saveRename);
     });
 }

 // Attach rename event to existing tabs
 document.querySelectorAll('.nav-item .nav-link .tab-text').forEach(tabText => {
     attachRenameEvent(tabText.parentElement.parentElement);
 });