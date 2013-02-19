var require = {
    "baseUrl":  ".",
    "paths":  {
        "es5-shim":  "Scripts/es5-shim",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "scalejs":  "Scripts/scalejs-0.2.6.1",
        "scalejs.date-xdate":  "Scripts/scalejs.date-xdate-0.2.0",
        "xdate":  "Scripts/xdate.dev"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.date-xdate"
        ]
    },
    "shim":  {
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        },
        "xdate":  {
            "exports":  "XDate"
        }
    }
};
