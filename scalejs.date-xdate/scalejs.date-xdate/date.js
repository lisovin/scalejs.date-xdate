/*global define*/
define([
    'xdate'
], function (
    XDate
) {
    'use strict';

    function addDays(date, days) {
        var xdate = new XDate(date);
        xdate.addDays(days);

        return xdate.toDate();
    }

    function getDay(date) {
        var xdate = new XDate(date),
            day = xdate.getDay();

        return day;
    }

    function toString(date, format, settings) {
        var xdate = new XDate(date),
            formatted = xdate.toString(format, settings);

        return formatted;
    }

    return {
        addDays: addDays,
        getDay: getDay,
        toString: toString
    };
});

