// ============ AUTHENTICATION MIDDLEWARE ============
// Authentication checks and user context (for Phase 4)

// Phase 3: Placeholder
// Phase 4: Will add JWT verification

/**
 * Verify authentication token
 * Phase 3: Placeholder - accepts all requests
 * Phase 4: Will verify JWT tokens
 * 
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 * @param {Function} next - Express next middleware
 */
const verifyAuth = (req, res, next) => {
    // Phase 3: Skip authentication
    // TODO: Phase 4 - Add JWT verification
    // const token = req.headers.authorization?.split(' ')[1];
    // if (!token) {
    //     return res.status(401).json({ message: 'No token provided' });
    // }
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = decoded;
    //     next();
    // } catch (error) {
    //     return res.status(401).json({ message: 'Invalid token' });
    // }
    
    next();
};

/**
 * Optional: Check if user owns the resource
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 * @param {Function} next - Express next middleware
 */
const checkOwnership = (req, res, next) => {
    // Phase 3: Skip ownership check
    // TODO: Phase 4 - Verify user owns the skill
    
    next();
};

module.exports = {
    verifyAuth,
    checkOwnership
};
