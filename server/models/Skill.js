// ============ SKILL MODEL ============
// Defines the Skill data structure and validation

/**
 * Skill class represents a user's skill entry
 * 
 * Structure:
 * {
 *   id: number (unique identifier)
 *   userId: string (will be added in Phase 4 for multi-user support)
 *   name: string (skill name)
 *   progress: number (0-100)
 *   notes: string (optional notes)
 *   createdAt: string (ISO date)
 *   updatedAt: string (ISO date)
 * }
 */

class Skill {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.progress = data.progress;
        this.notes = data.notes || '';
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
        this.userId = data.userId || null; // For Phase 4
    }

    /**
     * Validate skill data
     * @returns {Object} { valid: boolean, errors: Array }
     */
    validate() {
        const errors = [];

        if (!this.name || typeof this.name !== 'string' || this.name.trim() === '') {
            errors.push('Skill name is required and must be a string');
        }

        if (typeof this.progress !== 'number' || this.progress < 0 || this.progress > 100) {
            errors.push('Progress must be a number between 0 and 100');
        }

        if (typeof this.notes !== 'string') {
            errors.push('Notes must be a string');
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }

    /**
     * Convert to JSON representation
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            progress: this.progress,
            notes: this.notes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            userId: this.userId
        };
    }
}

module.exports = Skill;
