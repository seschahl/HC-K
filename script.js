
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

function goBack() {
    showTab('start');
}

function filterSäljare() {
    const selected = document.getElementById('säljareDropdown').value;
    const data = window.speeddejtData;
    const container = document.getElementById('speeddejtTableContainer');
    container.innerHTML = '';
    if (selected && data[selected]) {
        const table = document.createElement('table');
        table.border = '1';
        const header = table.insertRow();
        header.insertCell().innerText = 'Tid';
        header.insertCell().innerText = 'Företag';
        data[selected].forEach(row => {
            const tr = table.insertRow();
            tr.insertCell().innerText = row[0];
            tr.insertCell().innerText = row[1];
        });
        container.appendChild(table);
    }
}
