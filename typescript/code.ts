var _age = 26;
var _name = `huy`;
var phone = '03845459058';
var info = `xin chào tên tôi là ${_name}, năm nay tôi ${_age} tuổi , số điện thoại ${phone}`;

var demo = document.getElementById('demo');
// demo.innerHTML = info;
var nname:string = 'huyhayho';
let tuoi:number = 22;
const ny:boolean = false;
var sinhvien:Array<string> = [
    'Lê Trung Hiếu',
    'Trịnh Đình Hiếu'
];
var std:any = {
    name:'Nguyễn Quốc Huy',
    age:22,
    email:'huyhayho@gmail.com'
}
let gender: [number,string]= [12,'huyhhh'];
enum Color  { do ='#00000', xanh ='#12000'};
console.log(sinhvien[0]);
console.log(std.name);
console.log(Color.do);
function hello(fistName:string,lastName:string,age:number,gender:boolean):string{
return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender?'Nam':'Nữ'}`;
}
var hello1 = function(fistName:string,lastName:string,age:number,gender:boolean):string{
    return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender?'Nam':'Nữ'}`;
    }
var hello2 =(fistName:string,lastName:string,age:number,gender:boolean):string =>{
    return `Hello my name is ${fistName}${lastName},my age is${age},gender is ${gender?'Nam':'Nữ'}`;
    }
let result = hello2('Nguyễn','Quốc Huy',22,true);
console.log(result);
var demo3 = (name:string):void=>{
    console.log(name);
}
demo3('huy');
var abc:Array<any> = [
    {
        name:'Nguyen QUoc HUy',
        age:22
    },
    {
        name:'Trinh Hieu',
        age:22
    },
    {
        name:'Nguyen hieu',
        age:22
    }
];
for(var s of abc){
    console.log(s.name,s.age);
}