// ============ SKILLS ROUTES ============
// Routes for skill operations

const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

/**
 * GET /api/skills
 * Retrieve all skills
 */
router.get('/', skillsController.getAllSkills);

/**
 * GET /api/skills/:id
 * Retrieve a single skill by ID
 */
router.get('/:id', skillsController.getSkillById);

/**
 * POST /api/skills
 * Create a new skill
 */
router.post('/', skillsController.createSkill);

/**
 * PUT /api/skills/:id
 * Update a skill
 */
router.put('/:id', skillsController.updateSkill);

/**
 * DELETE /api/skills/:id
 * Delete a skill
 */
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
