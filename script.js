
function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function filterTable() {
    const selectedSeller = document.getElementById('sellerSelect').value;
    const rows = document.querySelectorAll('#speedTable tr');
    rows.forEach((row, index) => {
        if (index === 0 || row.cells[0].textContent === selectedSeller) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
