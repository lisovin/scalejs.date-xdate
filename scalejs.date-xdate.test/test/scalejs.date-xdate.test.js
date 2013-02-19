/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var date = core.date;

    describe('date extension', function () {
        it('is defined', function () {
            expect(date).toBeDefined();
        });

        it('addDays is correct', function () {
            var newDate = date.addDays('2013-01-24', 15);
            expect(date.toString(newDate, 'yyyy-MM-dd')).toEqual('2013-02-08');
        });

        it('getDay is correct', function () {
            expect(date.getDay('2013-01-24')).toEqual(4);
        });
    });
});