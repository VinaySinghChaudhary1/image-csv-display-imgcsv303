document.addEventListener('DOMContentLoaded', function() {
    fetch('inventory.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.split(','));
            const tableBody = document.getElementById('csv-data');
            rows.forEach((row, index) => {
                if (index > 0) { // Skip header
                    const tr = document.createElement('tr');
                    row.forEach(cell => {
                        const td = document.createElement('td');
                        td.textContent = cell;
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => {
            console.error('Error loading CSV:', error);
            alert('Error loading inventory data.');
        });

    document.getElementById('inventory-filter').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = document.querySelectorAll('#csv-data tr');
        rows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filter));
            row.style.display = match ? '' : 'none';
        });
    });
});

function viewImage(image) {
    const largeImage = document.getElementById('large-image');
    largeImage.src = image;
    largeImage.style.display = 'block';
}