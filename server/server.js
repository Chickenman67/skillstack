require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ============ MIDDLEWARE ============
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

// ============ IN-MEMORY DATABASE (Phase 3 - will replace with MongoDB in Phase 4) ============
let skills = [];
let skillIdCounter = 1;

// ============ ROUTES ============

/**
 * GET /api/skills
 * Retrieve all skills (will be user-specific after auth in Phase 4)
 */
app.get('/api/skills', (req, res) => {
    res.json({
        success: true,
        data: skills,
        count: skills.length
    });
});

/**
 * POST /api/skills
 * Create a new skill
 */
app.post('/api/skills', (req, res) => {
    try {
        const { name, progress, notes } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Skill name is required'
            });
        }

        if (progress === undefined || progress === '' || isNaN(progress) || progress < 0 || progress > 100) {
            return res.status(400).json({
                success: false,
                message: 'Progress must be a number between 0 and 100'
            });
        }

        // Create skill
        const newSkill = {
            id: skillIdCounter++,
            name: name.trim(),
            progress: parseInt(progress),
            notes: notes ? notes.trim() : '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        skills.push(newSkill);

        res.status(201).json({
            success: true,
            message: 'Skill created successfully',
            data: newSkill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

/**
 * PUT /api/skills/:id
 * Update a skill
 */
app.put('/api/skills/:id', (req, res) => {
    try {
        const skillId = parseInt(req.params.id);
        const { name, progress, notes } = req.body;

        // Find skill
        const skill = skills.find(s => s.id === skillId);
        if (!skill) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }

        // Update fields if provided
        if (name !== undefined) {
            if (name.trim() === '') {
                return res.status(400).json({
                    success: false,
                    message: 'Skill name cannot be empty'
                });
            }
            skill.name = name.trim();
        }

        if (progress !== undefined) {
            if (isNaN(progress) || progress < 0 || progress > 100) {
                return res.status(400).json({
                    success: false,
                    message: 'Progress must be between 0 and 100'
                });
            }
            skill.progress = parseInt(progress);
        }

        if (notes !== undefined) {
            skill.notes = notes.trim();
        }

        skill.updatedAt = new Date().toISOString();

        res.json({
            success: true,
            message: 'Skill updated successfully',
            data: skill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

/**
 * DELETE /api/skills/:id
 * Delete a skill
 */
app.delete('/api/skills/:id', (req, res) => {
    try {
        const skillId = parseInt(req.params.id);

        // Find skill
        const skillIndex = skills.findIndex(s => s.id === skillId);
        if (skillIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Skill not found'
            });
        }

        // Delete skill
        const deletedSkill = skills.splice(skillIndex, 1)[0];

        res.json({
            success: true,
            message: 'Skill deleted successfully',
            data: deletedSkill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

/**
 * GET /api/skills/:id
 * Get a single skill by ID
 */
app.get('/api/skills/:id', (req, res) => {
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
            message: 'Server error',
            error: error.message
        });
    }
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'SkillStack server is running',
        timestamp: new Date().toISOString()
    });
});

// ============ ERROR HANDLING ============

/**
 * 404 handler
 */
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// ============ START SERVER ============

app.listen(PORT, () => {
    console.log(`🚀 SkillStack server running on http://localhost:${PORT}`);
    console.log(`📝 API endpoints:`);
    console.log(`   GET  /api/skills`);
    console.log(`   POST /api/skills`);
    console.log(`   GET  /api/skills/:id`);
    console.log(`   PUT  /api/skills/:id`);
    console.log(`   DELETE /api/skills/:id`);
});
