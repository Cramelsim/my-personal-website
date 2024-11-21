// DOM Elements
const profileForm = document.getElementById('profileForm');
const profileDisplay = document.getElementById('profileDisplay');
const editProfileBtn = document.getElementById('editProfile');

// Display Fields
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayWeight = document.getElementById('displayWeight');
const displayHeight = document.getElementById('displayHeight');

// Event Listener to Save Profile
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values from form inputs
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  // Save to localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('weight', weight);
  localStorage.setItem('height', height);

  // Update Display
  updateProfileDisplay();

  // Toggle views
  profileForm.classList.add('hidden');
  profileDisplay.classList.remove('hidden');
});

// Function to Update Profile Display
function updateProfileDisplay() {
  displayName.textContent = localStorage.getItem('name');
  displayAge.textContent = localStorage.getItem('age');
  displayWeight.textContent = localStorage.getItem('weight');
  displayHeight.textContent = localStorage.getItem('height');
}

// Edit Profile
editProfileBtn.addEventListener('click', () => {
  profileForm.classList.remove('hidden');
  profileDisplay.classList.add('hidden');
});

// Load Profile on Page Load
window.onload = () => {
  if (localStorage.getItem('name')) {
    updateProfileDisplay();
    profileForm.classList.add('hidden');
    profileDisplay.classList.remove('hidden');
  }
};

document.querySelector("body").appendChild(h2);