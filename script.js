document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('profileImage');
    const storedImageData = localStorage.getItem('userImage');
    const dummyImageURL = 'https://images.unsplash.com/photo-1580034283351-073a1906f7ba?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    if (storedImageData) {
        // If an image is stored in localStorage, display it
        imageContainer.src = storedImageData;
    } else {
        // If no image is stored, display the default image
        setDefaultImage();
    }
});

document.getElementById('imageInput').addEventListener('change', handleImageUpload);
document.getElementById('removeImageButton').addEventListener('click', removeImage);

// Function to set the default image
function setDefaultImage() {
    const imageContainer = document.getElementById('profileImage');
    const dummyImageURL = 'https://images.unsplash.com/photo-1580034283351-073a1906f7ba?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    imageContainer.src = dummyImageURL;
}

// Function to handle image upload
function handleImageUpload(event) {
    const fileInput = event.target;
    const imageContainer = document.getElementById('profileImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imageContainer.src = e.target.result;

            // Save the image to localStorage
            saveImageToLocalStorage(e.target.result);
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Function to save image to localStorage
function saveImageToLocalStorage(imageDataURL) {
    localStorage.setItem('userImage', imageDataURL);
}

// Function to remove the image
function removeImage() {
    const imageContainer = document.getElementById('profileImage');

    // Remove the stored image from localStorage
    localStorage.removeItem('userImage');

    // Set the default image
    setDefaultImage();
}
