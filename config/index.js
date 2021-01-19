require('dotenv').config();
module.exports.SES = {
    KEY: process.env.AWS_KEY,
    SECRET: process.env.AWS_SECRET,
    SERVER: process.env.AWS_SERVER,
    PORT: process.env.AWS_SERVER_PORT,
    FROM: process.env.AWS_EMAIL_FROM,
    CHARSET: process.env.AWS_EMAIL_CHARSET,
    DIR: process.env.TEMPLATE_DIR
}