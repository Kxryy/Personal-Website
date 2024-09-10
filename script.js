function showDetails(hobbyId) {
    // Hide all details
    const hobbyDetails = document.querySelectorAll('.hobby-detail');
    hobbyDetails.forEach(detail => detail.style.display = 'none');

    // Show selected hobby details with animation
    const selectedDetail = document.getElementById(hobbyId);
    selectedDetail.style.display = 'block';
    selectedDetail.classList.add('fade-in');

    // Show details section
    document.getElementById('details').classList.remove('hidden');
}

function hideDetails() {
    // Add fade-out animation
    const detailsSection = document.getElementById('details');
    detailsSection.classList.add('fade-out');

    // Wait for animation to finish before hiding
    setTimeout(() => {
        detailsSection.classList.add('hidden');
        detailsSection.classList.remove('fade-out');
    }, 300);
}
