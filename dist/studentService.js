System.register([], function (exports_1, context_1) {
    "use strict";
    var studentService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            studentService = class studentService {
                constructor() {
                    this.data = this.setData();
                }
                setData() {
                    let dataInstorage = localStorage.getItem('student_data');
                    if (dataInstorage) {
                        return JSON.parse(dataInstorage);
                    }
                    return [];
                }
                showListData() {
                    let tbody2 = document.getElementById('tbody2');
                    let _tr = '';
                    for (const obj of this.data) {
                        let dtb = ((obj.toan + obj.ly + obj.hoa) / 3);
                        let xeploai = '';
                        if (dtb < 5) {
                            xeploai = 'yếu';
                        }
                        else if (dtb >= 5 && dtb < 6.5) {
                            xeploai = 'Trung bình';
                        }
                        else if (dtb >= 6.5 && dtb < 8) {
                            xeploai = ' Khá';
                        }
                        else if (dtb >= 8 && dtb < 9) {
                            xeploai = 'Giỏi';
                        }
                        else {
                            xeploai = 'Xuất Sắc';
                        }
                        _tr += `
            <tr>
                <td>${obj.code}</td>
                <td>${obj.name}</td>
                <td>${obj.toan}</td>
                <td>${obj.ly}</td>
                <td>${obj.hoa}</td>
                <td>${dtb.toFixed(1)}</td>
                <td>${xeploai}</td>
                <td>
                <button class="btn btn-info edit_student" data-code="${obj.code}">Sửa</button>
                </td>
                <td>
                <button class="btn btn-danger delete_student" data-id="${obj.code}">Xóa</button>
                </td>
                
            </tr>`;
                    }
                    tbody2.innerHTML = _tr;
                }
                addStudent() {
                    var form = document.getElementById('std_form');
                    let std = {
                        code: form.code.value,
                        name: form.fullname.value,
                        toan: parseFloat(form.toan.value),
                        ly: parseFloat(form.ly.value),
                        hoa: parseFloat(form.hoa.value),
                    };
                    this.data.push(std);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem('student_data', jsonData);
                    this.showListData();
                }
                deleteStudent(code) {
                    let index = this.data.findIndex(function (obj) {
                        return obj.code == code;
                    });
                    this.data.splice(index, 1);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem('student_data', jsonData);
                    this.showListData();
                }
                findByName(name) {
                    let search_data = this.data.filter(function (obj) {
                        return obj.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
                    });
                    this.data = search_data;
                    this.showListData();
                }
                findByCode(code) {
                    let search_data = this.data.filter(function (obj) {
                        return obj.code.toLocaleLowerCase() == code.toLocaleLowerCase();
                    });
                    return search_data;
                }
                updateStudent(code) {
                    let index = this.data.findIndex(function (obj) {
                        return obj.code == code;
                    });
                    var form = document.getElementById('std_form');
                    this.data[index].name = form.fullname.value;
                    this.data[index].toan = parseFloat(form.toan.value);
                    this.data[index].ly = parseFloat(form.ly.value);
                    this.data[index].hoa = parseFloat(form.hoa.value);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem('student_data', jsonData);
                    this.showListData();
                }
            };
            exports_1("studentService", studentService);
        }
    };
});
