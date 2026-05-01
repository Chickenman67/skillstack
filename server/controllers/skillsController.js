// ============ SKILLS CONTROLLER ============
// Handles business logic for skill operations

const Skill = require('../models/Skill');

// In-memory storage (Phase 3 - will use MongoDB in Phase 4)
let skills = [];
let skillIdCounter = 1;

/**
 * Get all skills
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const getAllSkills = (req, res) => {
    try {
        res.json({
            success: true,
            data: skills,
            count: skills.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching skills',
            error: error.message
        });
    }
};

/**
 * Get single skill by ID
 * @param {Object} req - Express request with params.id
 * @param {Object} res - Express response
 */
const getSkillById = (req, res) => {
    try {
        const skillId = parseInt(req.params.id);
        const skill = skills.find(s => s.id === skillId);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }

        res.json({
            success: true,
            data: skill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching skill',
            error: error.message
        });
    }
};

/**
 * Create a new skill
 * @param {Object} req - Express request with body { name, progress, notes }
 * @param {Object} res - Express response
 */
const createSkill = (req, res) => {
    try {
        const { name, progress, notes } = req.body;

        // Create skill instance
        const skill = new Skill({
            id: skillIdCounter++,
            name,
            progress: parseInt(progress),
            notes
        });

        // Validate
        const validation = skill.validate();
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: validation.errors
            });
        }

        // Add to storage
        skills.push(skill.toJSON());

        res.status(201).json({
            success: true,
            message: 'Skill created successfully',
            data: skill.toJSON()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating skill',
            error: error.message
        });
    }
};

/**
 * Update a skill
 * @param {Object} req - Express request with params.id and body updates
 * @param {Object} res - Express response
 */
const updateSkill = (req, res) => {
    try {
        const skillId = parseInt(req.params.id);
        const { name, progress, notes } = req.body;

        // Find skill
        const skillIndex = skills.findIndex(s => s.id === skillId);
        if (skillIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }

        // Update fields
        const updatedSkill = {
            ...skills[skillIndex],
            name: name !== undefined ? name : skills[skillIndex].name,
            progress: progress !== undefined ? parseInt(progress) : skills[skillIndex].progress,
            notes: notes !== undefined ? notes : skills[skillIndex].notes,
            updatedAt: new Date().toISOString()
        };

        // Validate
        const skillInstance = new Skill(updatedSkill);
        const validation = skillInstance.validate();
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: validation.errors
            });
        }

        // Save
        skills[skillIndex] = updatedSkill;

        res.json({
            success: true,
            message: 'Skill updated successfully',
            data: updatedSkill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating skill',
            error: error.message
        });
    }
};

/**
 * Delete a skill
 * @param {Object} req - Express request with params.id
 * @param {Object} res - Express response
 */
const deleteSkill = (req, res) => {
    try {
        const skillId = parseInt(req.params.id);

        // Find and remove
        const skillIndex = skills.findIndex(s => s.id === skillId);
        if (skillIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }

        const deletedSkill = skills.splice(skillIndex, 1)[0];

        res.json({
            success: true,
            message: 'Skill deleted successfully',
            data: deletedSkill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting skill',
            error: error.message
        });
    }
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
};
