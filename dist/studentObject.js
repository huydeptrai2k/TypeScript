System.register([], function (exports_1, context_1) {
    "use strict";
    var studentObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            studentObject = class studentObject {
                constructor() {
                    this.code = '';
                    this.name = '';
                    this.toan = 0;
                    this.ly = 0;
                    this.hoa = 0;
                }
            };
            exports_1("studentObject", studentObject);
        }
    };
});
