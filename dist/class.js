System.register(["./studentService.js"], function (exports_1, context_1) {
    "use strict";
    var studentService_js_1, Book, Calculator, myCalculator, studen;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (studentService_js_1_1) {
                studentService_js_1 = studentService_js_1_1;
            }
        ],
        execute: function () {
            Book = class Book {
                constructor(code, name, author, price) {
                    this.code = code;
                    this.name = name;
                    this.author = author;
                    this.price = price;
                }
                getInfo() {
                    return `Book code : ${this.code},Bookname: ${this.name}, Bookauthor: ${this.author}, Price: ${this.price}`;
                }
            };
            Calculator = class Calculator {
                constructor(soa, sob) {
                    this.soa = soa;
                    this.sob = sob;
                }
                tong() {
                    return this.soa + this.sob;
                }
                tru() {
                    if (this.soa > this.sob) {
                        return this.soa - this.sob;
                    }
                    else {
                        return this.sob - this.soa;
                    }
                }
                nhan() {
                    return this.soa * this.sob;
                }
                chia() {
                    if (this.sob != 0) {
                        return this.soa / this.sob;
                    }
                    else {
                        return 0;
                    }
                }
            };
            myCalculator = class myCalculator {
                constructor(...args) {
                    this.number = args;
                }
                execute(op = '+') {
                    if (op == '+') {
                        let total = 0;
                        for (const num of this.number) {
                            total += num;
                        }
                        return total;
                    }
                    else if (op == '*') {
                        let total = this.number[0];
                        this.number.shift();
                        for (const num of this.number) {
                            total *= num;
                        }
                        return total;
                    }
                }
            };
            studen = new studentService_js_1.studentService();
            studen.showListData();
            $('#add_student').click(function () {
                studen.addStudent();
            });
            $(document).on('click', '.edit_student', function () {
                var stdCode = $(this).data('code');
                let stBycode = studen.findByCode(stdCode);
                if (stBycode.length > 0) {
                    $('#code').val(stBycode[0].code);
                    $('#fullname').val(stBycode[0].name);
                    $('#toan').val(stBycode[0].toan);
                    $('#ly').val(stBycode[0].ly);
                    $('#hoa').val(stBycode[0].hoa);
                    $('#update_student').show();
                    $('#add_student').hide();
                    $('#code').prop('readonly', true);
                }
            });
            $(document).on('click', '#update_student', function () {
                var code = $('#code').val();
                studen.updateStudent(code);
                $('#std_form').trigger('reset');
                $('#update_student').hide();
                $('#add_student').show();
                $('#code').prop('readonly', false);
            });
            $(document).on('click', '.delete_student', function () {
                var stdCode = $(this).data('id');
                studen.deleteStudent(stdCode);
            });
            $(document).on('click', '.search_student', function () {
                let search_code = $('#search_code').val();
                if (search_code != '') {
                    studen.findByName(search_code);
                }
                else {
                    location.reload();
                }
            });
        }
    };
});
