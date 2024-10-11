// Store payment history
let paymentHistory = {
    latest: [],
    previous: [],
};

function submitPayments() {
    const latestHistoryDiv = document.getElementById("latest-history");
    const previousHistoryDiv = document.getElementById("previous-history");
    
    const tenants = document.querySelectorAll('.tenant-list input[type="checkbox"]');
    const date = new Date().toLocaleDateString(); // Get current date

    // Clear previous history
    latestHistoryDiv.innerHTML = ""; 
    previousHistoryDiv.innerHTML = "";

    tenants.forEach(tenant => {
        if (tenant.checked) {
            const tenantName = tenant.parentNode.textContent.trim();

            // Add to latest payments
            paymentHistory.latest.push({ name: tenantName, date: date });

            // Update the latest history
            const latestItem = document.createElement("p");
            latestItem.textContent = `${tenantName} has paid on ${date}.`;
            latestHistoryDiv.appendChild(latestItem);
        }
    });

    // Store latest payments in previous if there are already some recorded
    if (paymentHistory.latest.length > 0) {
        previousHistoryDiv.innerHTML += "<h4>Previous Payments:</h4>";
        paymentHistory.latest.forEach(payment => {
            const previousItem = document.createElement("p");
            previousItem.textContent = `${payment.name} paid on ${payment.date}.`;
            previousHistoryDiv.appendChild(previousItem);
        });

        // Clear latest payments after submission
        paymentHistory.latest = [];
    }
}
