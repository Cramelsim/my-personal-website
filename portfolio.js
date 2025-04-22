// portfolio.js - Frontend-only solution for project viewing and contact form

// Project data stored directly in the frontend
const projects = [
    {
      id: 1,
      title: "Job Applicant Tracking System",
      description: "I engineered a robust backend system for tracking job applicants using Flask-RESTful API. This project focused on creating a comprehensive server-side architecture that handles the entire recruitment workflow through well-designed API endpoints. I implemented a secure session-based authentication system that maintains user login states across sessions, complete with login, logout, and session verification functionality. The API supports core recruitment operations including applicant data management, job posting creation, application status tracking through multiple hiring stages, and data retrieval for analytics purposes. My database schema efficiently manages relationships between users, applicants, positions, and application statuses while ensuring data integrity and security. I designed RESTful endpoints following best practices for resource naming, HTTP methods, and status codes, creating a clean API that frontend developers can easily integrate with. This backend solution demonstrates my proficiency with Flask-RESTful, session management, database design, and my ability to translate business requirements into a scalable API architecture that serves as the foundation for an effective applicant tracking system.",
      technologies: ["Flask-RESTful", "Session Management", "Database Design"],
      github: "https://github.com/Cramelsim/job-board-and-applicant-tracking-system",
      images: ["project1-img1.jpg", "project1-img2.jpg"]
    },
    {
      id: 2,
      title: "Travel Buddy",
      description: "Travel Buddy is a full-stack web application I developed that streamlines the travel planning and booking process for users. Built with React on the frontend and Python Flask-RESTful on the backend, this platform enables customers to discover destinations, create personalized itineraries, and complete bookings all in one place. The intuitive React interface delivers a seamless user experience with interactive destination browsing, trip customization tools, and a streamlined checkout process, while the Flask-RESTful backend handles user authentication, destination management, trip creation, and secure booking transactions. I implemented persistent user sessions, a dynamic trip builder that allows users to add multiple destinations to their itinerary, and a responsive design that works across devices. The application features detailed destination information with photos and reviews, a favorites system for saving potential destinations, and a comprehensive booking management dashboard for users to track their travel plans. This project demonstrates my ability to create a cohesive integration between a dynamic React frontend and a robust Flask-RESTful backend, showcasing my full-stack development capabilities in building practical applications that solve real-world travel planning challenges.",
      technologies: ["React", "Flask-RESTful", "Full-stack Development"],
      github: "https://github.com/MaryMachuma/travel-buddy1",
      images: ["project2-img1.jpg", "project2-img2.jpg"]
    },
    {
      id: 3,
      title: "Quiz App",
      description: "I developed an interactive Quiz App as a frontend project built entirely with React. This engaging single-page application enables users to test their knowledge through a seamless quiz-taking experience. Users navigate through a carefully designed interface presenting questions one at a time, with multiple-choice options displayed clearly for each question. The app utilizes React state management to track user selections and progress through the quiz without requiring page refreshes. Upon completing all questions, users are presented with a comprehensive results page that displays their overall score and performance metrics. The results section includes a detailed breakdown showing each question, the user's selected answer, and whether it was correct or incorrect. For any wrong answers, the app helpfully reveals the correct response, creating an educational opportunity. I implemented client-side logic for scoring, answer validation, and results calculation, while focusing on creating an intuitive and responsive user interface that works across different devices. This project showcases my proficiency with React components, state management, conditional rendering, and creating engaging user experiences with frontend technologies.",
      technologies: ["React", "JavaScript", "Frontend Development"],
      github: "https://github.com/Billy6925/Quiz-App",
      images: ["project3-img1.jpg", "project3-img2.jpg"]
    }
  ];
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to project links
    const projectLinks = document.querySelectorAll('.project-item a');
    projectLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.closest('.project-item').querySelector('h3').textContent.replace('Project ', '');
        showProjectDetails(parseInt(projectId));
      });
    });
    
    // Add event listener to "Hire Me" button
    const hireButton = document.querySelector('.button-two');
    if (hireButton) {
      hireButton.addEventListener('click', function(e) {
        e.preventDefault();
        showContactModal();
      });
    }
    
    // Create modal containers if they don't exist
    if (!document.getElementById('projectModal')) {
      createProjectModal();
    }
    
    if (!document.getElementById('contactModal')) {
      createContactModal();
    }
  });
  
  // Function to display project details in a modal
  function showProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Set modal content
    modalContent.innerHTML = `
      <span class="close-button">&times;</span>
      <h2>${project.title}</h2>
      <div class="project-technologies">
        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
      </div>
      <div class="project-description">
        <p>${project.description}</p>
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="github-link">View on GitHub</a>
      </div>
    `;
    
    // Add event listener to close button
    const closeButton = modalContent.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Display the modal
    modal.style.display = 'block';
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Function to display contact form modal
  function showContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Function to handle contact form submission
  function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Since we don't have a backend, we'll simulate sending an email
    alert(`Thank you for your message, ${name}! I'll get back to you soon!`);
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    // Hide modal
    document.getElementById('contactModal').style.display = 'none';
  }
  
  // Create project modal element
  function createProjectModal() {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'projectModal';
    modalDiv.className = 'modal';
    modalDiv.innerHTML = '<div class="modal-content"></div>';
    document.body.appendChild(modalDiv);
  }
  
  // Create contact modal element
  function createContactModal() {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'contactModal';
    modalDiv.className = 'modal';
    modalDiv.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Contact Me</h2>
        <form id="contact-form">
          <div class="form-group">
            <label for="contact-name">Name</label>
            <input type="text" id="contact-name" required>
          </div>
          <div class="form-group">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" required>
          </div>
          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    `;
    document.body.appendChild(modalDiv);
    
    // Add event listeners
    const closeButton = modalDiv.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
      modalDiv.style.display = 'none';
    });
    
    const form = modalDiv.querySelector('#contact-form');
    form.addEventListener('submit', handleContactSubmit);
  }
