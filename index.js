'use strict';
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const nodemailer = require("nodemailer");
const config = require("./config/index")

/**
 * Current available methods:
 * * Send(template, receiver)
 */
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
        /**
         * 
         * @param {*} template Is a given object of the name and type.
         * * HTML: {"name": "confirm", "type": "html"}
         * * TEXT: {"name": "confirm", "type": "text"}
         * @param {*} receiver Is a given object of the receiver email, email subject and your templates variables.
         * @returns A promise.
         */
        Send: async (template, receiver) =>{           
            return await transporter.sendMail({
                from: config.SES.FROM,
                to: receiver.email,
                headers: {
                    "x-priority": receiver.priority ? 1: 5,
                    "x-msmail-priority": receiver.priority ? "High" : "Low" ? !receiver.priority : "normal",
                    importance: receiver.priority ? "high" : "low" ? !receiver.priority : "normal"
                },
                subject: receiver.subject,
                html: handlebars.compile(fs.readFileSync(path.resolve(config.SES.DIR+template.type, (template.name+'.'+template.type)), config.SES.CHARSET))(receiver)
            });
        }
    }
}