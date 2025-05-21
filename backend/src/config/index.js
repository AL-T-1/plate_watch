// Loading env var and exporting config
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
    env,
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'am i changed',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'plate_watch',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || '',
    },
};

const configs = {
    development: {
        ...baseConfig,
        logging: true,
    },
    production: {
        ...baseConfig,
        logging: false,
    },
};

module.exports = configs[env];