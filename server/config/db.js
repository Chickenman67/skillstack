// ============ DATABASE CONFIG ============
// Database connection setup (for Phase 4 - MongoDB integration)

// In Phase 3, we use in-memory storage
// In Phase 4, this will connect to MongoDB

/**
 * Initialize database connection
 * Phase 3: No-op (using in-memory storage)
 * Phase 4: Will connect to MongoDB
 */
const initializeDatabase = async () => {
    // TODO: Phase 4 - Add MongoDB connection
    // const mongoose = require('mongoose');
    // await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('Database initialized (in-memory storage)');
};

/**
 * Close database connection
 */
const closeDatabase = async () => {
    // TODO: Phase 4 - Close MongoDB connection
    // await mongoose.connection.close();
    
    console.log('Database connection closed');
};

module.exports = {
    initializeDatabase,
    closeDatabase
};
