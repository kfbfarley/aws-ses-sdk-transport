const ses = require("./index")();

ses.Send({
    name: "confirm",
    type: "html"
        },{
            email: "kfbfarley@outlook.com",
            subject: "Hey, Jonh Doe!",
            first_name: "Jonh",
            url: "https://example.com/enable",
            url_disable: "https://example.com/disable"
        }
);