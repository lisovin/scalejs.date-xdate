
/*global define*/
define('scalejs.date-xdate/date',[
    'xdate'
], function (
    XDate
) {
    

    function toDate(date) {
        var xdate = new XDate(date);

        return xdate.toDate();
    }

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
        toDate: toDate,
        addDays: addDays,
        getDay: getDay,
        toString: toString
    };
});


/*global define*/
define('scalejs.date-xdate',[
    'scalejs!core',
    'scalejs.date-xdate/date'
], function (
    core,
    date
) {
    

    core.registerExtension({ date: date });
});

