const ses = require("./index")();

ses.Send({
    name: "confirm",
    type: "html"
        },{
            email: "doe@example.com",
            subject: "Hey, Jonh Doe!",
            priority: true,
            first_name: "Jonh",
            url: "https://example.com/enable",
            url_disable: "https://example.com/disable"
        }
);