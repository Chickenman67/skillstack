// ============ STORAGE MODULE ============
// Handles all localStorage operations for skill data
// Skills are stored as JSON array

const STORAGE_KEY = 'skillstack_skills';

/**
 * Get all skills from localStorage
 * @returns {Array} Array of skill objects
 */
function loadSkills() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

/**
 * Save skills to localStorage
 * @param {Array} skills - Array of skill objects to save
 */
function saveSkills(skills) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
}

/**
 * Add a new skill
 * @param {Object} skillData - { name, progress, notes }
 * @returns {Object} The created skill with ID and timestamp
 */
function addSkill(skillData) {
    const skills = loadSkills();
    
    const newSkill = {
        id: Date.now(), // Simple unique ID using timestamp
        name: skillData.name,
        progress: parseInt(skillData.progress),
        notes: skillData.notes,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    skills.push(newSkill);
    saveSkills(skills);
    
    return newSkill;
}

/**
 * Delete a skill by ID
 * @param {number} skillId - The ID of the skill to delete
 */
function deleteSkill(skillId) {
    let skills = loadSkills();
    skills = skills.filter(skill => skill.id !== skillId);
    saveSkills(skills);
}

/**
 * Update a skill's progress and notes
 * @param {number} skillId - The ID of the skill to update
 * @param {Object} updates - { progress, notes }
 */
function updateSkill(skillId, updates) {
    let skills = loadSkills();
    const skillIndex = skills.findIndex(skill => skill.id === skillId);
    
    if (skillIndex !== -1) {
        skills[skillIndex] = {
            ...skills[skillIndex],
            progress: updates.progress !== undefined ? parseInt(updates.progress) : skills[skillIndex].progress,
            notes: updates.notes !== undefined ? updates.notes : skills[skillIndex].notes,
            updatedAt: new Date().toISOString()
        };
        saveSkills(skills);
    }
}

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
