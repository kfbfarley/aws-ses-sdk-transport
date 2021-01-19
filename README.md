<h1 align="center">
      <br>A full JavaScript Node.js compatible AWS SES mailer using nodemailer transport
  <br/>
</h1>

A quick and useful JavaScript application to send emails from your Node.js server.

> [Amazon AWS SES](https://aws.amazon.com/ses/) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application.

## 📋 Requirements

You may use Windows, macOS, or Linux as your development operating system and the following tools:

-  [Node.js](https://nodejs.org/en/download/)

## 🚀 Technologies

This project was built using the following technologies:

-  [Node.js](https://nodejs.org/)
-  [Nodemailer](https://nodemailer.com/about/)
-  [Handlebars](https://handlebarsjs.com/)
-  [Node.js fs](https://nodejs.org/api/fs.html)

## 🔎 Preview

The following image is an illustration of how the HTML template was handled and compiled with the provided data.
> Remind: You can take a look on the templates folder [right here](https://github.com/kfbfarley/aws-ses-sdk-transport/tree/master/aws/ses/templates).

<p align="center">
  <img src="https://s3-eu-west-1.amazonaws.com/kfbfarley.com/confirm-email.png" width="400">
</p>

## 💻 Installation

To add this package to your project, simply execute the following command:

> Remind: You must be on your project root directory

```
$ npm install @kfbfarley/aws-ses-sdk-transport@1.0.1
```

After installing the package you have to set your environment variables on your .env file located on your root directory

> Note: If you don't know what is a .env file, [ckeck this article](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

```
AWS_KEY=
AWS_SECRET=
AWS_SERVER=
AWS_SERVER_PORT=
AWS_EMAIL_FROM=
AWS_EMAIL_CHARSET=
TEMPLATE_DIR=./aws/ses/templates/
```

## 🔎 Usage

```
$ const ses = require("@kfbfarley/aws-ses-sdk-transport")();
```

> Tip: Place your mouse poiter over the your const variable and you will have access to JSDocs

### Methods
* Send
> The method Send(template, receiver) has two parameters, one for template data and another for the receiver data.

## 📏 Example

If you want to send an email using Amazon Web Service Simple Email Service credentials you should do the following.

> Remind: You must have your credentials on your .env file.


```
const ses = require("@kfbfarley/aws-ses-sdk-transport")();

const send = ses.Send({
        name: "confirm", //template name without extension
        type: "html" //template type
    },{
        email: "doe@example.com",
        subject: "Olá Jonh Doe!",
        first_name: "Jonh",
        url: "https://example.com/enable",
        url_disable: "https://example.com/disable"
    }
);
```

## 👍 Contributing

Contributions are what make this platform an amazing place to learn, inspire, and create. Please feel free to visit the [open issues](https://github.com/kfbfarley/aws-ses-sdk-transport/issues) section to propose or create a related issue.

## 📄 Licensing

This repository is MIT licensed, as found in the [LICENSE][l] file.

[aws-ses-sdk-transport](https://github.com/kfbfarley/aws-ses-sdk-transport) has no documentation, just this repo.

[l]: https://github.com/kfbfarley/aws-ses-sdk-transport/blob/master/LICENSE