// ============ UI MODULE ============
// Handles all DOM rendering and UI updates

/**
 * Create a skill card HTML element
 * @param {Object} skill - Skill object with id, name, progress, notes, updatedAt
 * @returns {HTMLElement} The skill card element
 */
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.dataset.skillId = skill.id;
    
    const progressPercent = Math.max(0, Math.min(100, skill.progress)); // Clamp between 0-100
    
    card.innerHTML = `
        <h3>${escapeHtml(skill.name)}</h3>
        
        <div class="skill-meta">
            <span class="progress-value">${progressPercent}%</span>
        </div>
        
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        
        <div class="skill-timestamp">
            Last updated: ${formatDate(skill.updatedAt)}
        </div>
        
        <div class="skill-notes">
            ${escapeHtml(skill.notes || 'No notes added')}
        </div>
        
        <div class="card-buttons">
            <button class="update-btn" data-skill-id="${skill.id}">Update</button>
            <button class="delete-btn" data-skill-id="${skill.id}">Delete</button>
        </div>
    `;
    
    return card;
}

/**
 * Render all skills to the container
 * @param {Array} skills - Array of skill objects
 */
function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    const emptyState = document.getElementById('empty-state');
    
    // Clear container
    container.innerHTML = '';
    
    if (skills.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        skills.forEach(skill => {
            const card = createSkillCard(skill);
            container.appendChild(card);
        });
    }
}

/**
 * Show the add skill form section
 */
function showForm() {
    const formSection = document.getElementById('add-section');
    formSection.classList.add('active');
    document.getElementById('skill-form').reset();
    document.getElementById('skill-name').focus();
}

/**
 * Hide the add skill form section
 */
function hideForm() {
    const formSection = document.getElementById('add-section');
    formSection.classList.remove('active');
    document.getElementById('skill-form').reset();
}

/**
 * Populate form with skill data for editing
 * @param {Object} skill - Skill object to edit
 */
function populateFormForEdit(skill) {
    document.getElementById('skill-name').value = skill.name;
    document.getElementById('skill-progress').value = skill.progress;
    document.getElementById('skill-notes').value = skill.notes;
    showForm();
}

/**
 * Clear form inputs
 */
function clearForm() {
    document.getElementById('skill-form').reset();
}

/**
 * Get form input values
 * @returns {Object} { name, progress, notes }
 */
function getFormValues() {
    return {
        name: document.getElementById('skill-name').value.trim(),
        progress: document.getElementById('skill-progress').value,
        notes: document.getElementById('skill-notes').value.trim()
    };
}

/**
 * Escape HTML special characters for security
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Show a toast notification (temporary message)
 * @param {string} message - Message to show
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'success') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Can be extended to show visual toast UI
}
