// Handle the upload and display of the resume
function uploadResume() {
    const fileInput = document.getElementById('resume-upload');
    const file = fileInput.files[0];
    const downloadLink = document.getElementById('download-link');
    const resumeViewer = document.getElementById('resume-viewer');

    // Check if a file was selected
    if (!file) {
        alert('Please select a PDF file to upload.');
        return;
    }

    // Ensure the file is a PDF
    if (file.type !== 'application/pdf') {
        alert('Please upload a valid PDF file.');
        return;
    }

    // Create a URL for the uploaded file and set it as the source for the iframe and the download link
    const fileURL = URL.createObjectURL(file);
    
    // Set the iframe source to display the resume
    resumeViewer.src = fileURL;

    // Enable the download link with the uploaded file
    downloadLink.href = fileURL;
    downloadLink.style.display = 'inline-block'; // Show the download link
}
