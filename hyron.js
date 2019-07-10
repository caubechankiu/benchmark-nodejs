const hyron = require("hyron");

class demo {
    static requestConfig() {
        return {
            "": {
                method: "get",
                handle: () => "Hello World"
            }
        };
    }
}

var instance = hyron.getInstance(3000);

instance.enableServices({
    "": demo
})

instance.startServer();