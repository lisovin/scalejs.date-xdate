/*global define*/
define([
    'scalejs!core',
    'scalejs.date-xdate/date'
], function (
    core,
    date
) {
    'use strict';

    core.registerExtension({ date: date });
});

