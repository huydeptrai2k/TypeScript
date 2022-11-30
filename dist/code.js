var _age = 26;
var _name = `huy`;
var phone = '03845459058';
var info = `xin chào tên tôi là ${_name}, năm nay tôi ${_age} tuổi , số điện thoại ${phone}`;
var demo = document.getElementById('demo');
var nname = 'huyhayho';
let tuoi = 22;
const ny = false;
var sinhvien = [
    'Lê Trung Hiếu',
    'Trịnh Đình Hiếu'
];
var std = {
    name: 'Nguyễn Quốc Huy',
    age: 22,
    email: 'huyhayho@gmail.com'
};
let gender = [12, 'huyhhh'];
var Color;
(function (Color) {
    Color["do"] = "#00000";
    Color["xanh"] = "#12000";
})(Color || (Color = {}));
;
console.log(sinhvien[0]);
console.log(std.name);
console.log(Color.do);
function hello(fistName, lastName, age, gender) {
    return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender ? 'Nam' : 'Nữ'}`;
}
var hello1 = function (fistName, lastName, age, gender) {
    return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender ? 'Nam' : 'Nữ'}`;
};
var hello2 = (fistName, lastName, age, gender) => {
    return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender ? 'Nam' : 'Nữ'}`;
};
let result = hello2('Nguyễn', 'Quốc Huy', 22, true);
console.log(result);
var demo3 = (name) => {
    console.log(name);
};
demo3('huy');
var abc = [
    {
        name: 'Nguyen QUoc HUy',
        age: 22
    },
    {
        name: 'Trinh Hieu',
        age: 22
    },
    {
        name: 'Nguyen hieu',
        age: 22
    }
];
for (var s of abc) {
    console.log(s.name, s.age);
}
