/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "scalejs":  "Scripts/scalejs-0.1.13",
        "scalejs.date-xdate":  "Scripts/scalejs.date-xdate-0.1.0",
        "xdate":  "Scripts/xdate.dev"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.date-xdate"
        ]
    },
    "shim":  {
        "xdate":  {
            "exports":  "XDate"
        }
    }
}, ['tests/all.tests']);
