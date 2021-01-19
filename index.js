'use strict';
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const nodemailer = require("nodemailer");
const config = require("./config/index")


module.exports = () =>{
    let transporter = nodemailer.createTransport({
        host: config.SES.SERVER,
        port: config.SES.PORT,
        secure: false,
        auth: {
          user: config.SES.KEY,
          pass: config.SES.SECRET
        }
    });
    return {
        Send: async (template, receiver) =>{           
            return await transporter.sendMail({
                from: config.SES.FROM,
                to: receiver.email,
                subject: receiver.subject,
                html: handlebars.compile(fs.readFileSync(path.resolve(config.SES.DIR+template.type, (template.name+'.'+template.type)), config.SES.CHARSET))(receiver)
            });
        }
    }
}