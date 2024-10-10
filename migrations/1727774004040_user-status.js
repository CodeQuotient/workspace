/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = async pgm => {
    await pgm.sql(`ALTER TABLE users
        ADD COLUMN IF NOT EXISTS status VARCHAR(100) DEFAULT NULL
        `);
};

exports.down = async pgm => {
    await pgm.sql(`ALTER TABLE channels
        DROP COLUMN IF EXISTS status
        `);
};
