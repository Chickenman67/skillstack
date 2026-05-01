// ============ APP MODULE ============
// Main application logic - handles events and state management

let currentEditingSkillId = null;

// ============ INITIALIZATION ============

/**
 * Initialize the app on page load
 */
function initApp() {
    // Load and display existing skills
    const skills = loadSkills();
    renderSkills(skills);
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('✅ SkillStack initialized');
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Form events
    const form = document.getElementById('skill-form');
    form.addEventListener('submit', handleFormSubmit);
    
    // Navigation buttons
    document.getElementById('add-btn').addEventListener('click', showForm);
    document.getElementById('cancel-btn').addEventListener('click', hideForm);
    document.getElementById('dashboard-btn').addEventListener('click', hideForm);
    
    // Event delegation for skill card buttons
    document.getElementById('skills-container').addEventListener('click', handleCardButtonClick);
}

// ============ EVENT HANDLERS ============

/**
 * Handle form submission (add or update skill)
 * @param {Event} event - Form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const values = getFormValues();
    
    // Validation
    if (!values.name) {
        showNotification('Please enter a skill name', 'error');
        return;
    }
    
    if (values.progress === '') {
        showNotification('Please enter progress', 'error');
        return;
    }
    
    const progress = parseInt(values.progress);
    if (isNaN(progress) || progress < 0 || progress > 100) {
        showNotification('Progress must be between 0 and 100', 'error');
        return;
    }
    
    // Add or update skill
    if (currentEditingSkillId) {
        updateSkill(currentEditingSkillId, {
            progress: values.progress,
            notes: values.notes
        });
        showNotification(`✏️ "${values.name}" updated!`, 'success');
        currentEditingSkillId = null;
    } else {
        addSkill({
            name: values.name,
            progress: values.progress,
            notes: values.notes
        });
        showNotification(`✅ "${values.name}" added!`, 'success');
    }
    
    // Update UI
    const skills = loadSkills();
    renderSkills(skills);
    clearForm();
    hideForm();
}

/**
 * Handle skill card button clicks (delete, update)
 * @param {Event} event - Click event
 */
function handleCardButtonClick(event) {
    const target = event.target;
    
    if (target.classList.contains('delete-btn')) {
        const skillId = parseInt(target.dataset.skillId);
        handleDeleteSkill(skillId);
    } 
    else if (target.classList.contains('update-btn')) {
        const skillId = parseInt(target.dataset.skillId);
        handleEditSkill(skillId);
    }
}

/**
 * Handle skill deletion
 * @param {number} skillId - ID of skill to delete
 */
function handleDeleteSkill(skillId) {
    const skills = loadSkills();
    const skill = skills.find(s => s.id === skillId);
    
    if (skill && confirm(`Are you sure you want to delete "${skill.name}"?`)) {
        deleteSkill(skillId);
        const updatedSkills = loadSkills();
        renderSkills(updatedSkills);
        showNotification(`🗑️ "${skill.name}" deleted!`, 'success');
    }
}

/**
 * Handle skill editing
 * @param {number} skillId - ID of skill to edit
 */
function handleEditSkill(skillId) {
    const skills = loadSkills();
    const skill = skills.find(s => s.id === skillId);
    
    if (skill) {
        currentEditingSkillId = skillId;
        populateFormForEdit(skill);
    }
}

// ============ KEYBOARD SHORTCUTS ============

// Optional: Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Escape key to close form
    if (event.key === 'Escape') {
        hideForm();
    }
});

// ============ START APP ============

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

