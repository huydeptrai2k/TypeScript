import { studentObject } from "./studentObject.js";
import { studentService } from "./studentService.js";
declare var $:any;
 class Book{
    code:string;
    name:string;
    author:string;
    price:number;

    constructor(code:string,name:string,author:string,price:number){
        this.code =code;
        this.name=name;
        this.author =  author;
        this.price = price;
    }

    getInfo(){
        return `Book code : ${this.code},Bookname: ${this.name}, Bookauthor: ${this.author}, Price: ${this.price}`;
    }


}
// khởi tạo 1 đối tượng book
// var book1 = new Book('B123','CHi pheo','Nam Cao',120000);
// var book2 = new Book('B123','Lao Hac','Nam Cao',120000);
// console.log(book1);
// console.log(book2);


class Calculator{
    soa:number;
    sob:number;
    constructor(soa:number,sob:number){
        this.soa = soa;
        this.sob = sob;
    }


    tong():number{
       return this.soa +this.sob;
    }
    tru():number{
        if(this.soa > this.sob){
            return this.soa -this.sob;
        }else{
            return this.sob-this.soa;
        }
    }
    nhan():number{
        return this.soa *this.sob
    }
    chia():number{
        if(this.sob!=0){
          return  this.soa/this.sob;
        }else{
            return 0;
        }
    }
}
// var calcultor = new Calculator(6,4);
// console.log(calcultor.tong());
// console.log(calcultor.tru());
// console.log(calcultor.nhan());
// console.log(calcultor.chia());

class myCalculator{
    number:Array<number>;
    constructor(...args :Array<number>){
        this.number = args;
    }
     execute(op:string = '+'):number{
        if(op =='+'){
            let total =0;
            for (const num of this.number) {
                total+=num;
            }
            return total;
        }else if(op=='*'){
            let total = this.number[0];
            this.number.shift();//loai bo ptu dau
            for (const num of this.number) {
                total*=num;
            }
            return total;
        }
        // }else if(op=='-'){
        //     let total = this.number[0];
        //     this.number.shift();//loai bo ptu dau
        //     for (const num of this.number) {
        //         total-=num;
        //     }
        //     return total;
        // }else if(op=='/'){
        //     let total = this.number[0];
        //     this.number.shift();//loai bo ptu dau
        //     for (const num of this.number) {
        //         total/=num;
        //     }
        //     return total;
        // }
    }
}
// var cul = new myCalculator(8,9);
// console.log(cul.execute());
// console.log(cul.execute('*'));

var studen = new studentService();
studen.showListData();
$('#add_student').click(function(){
    studen.addStudent();
});
$(document).on('click', '.edit_student',function(){
    var stdCode:string = $(this).data('code');
    let stBycode = studen.findByCode(stdCode);
    if(stBycode.length > 0){
        $('#code').val(stBycode[0].code);
        $('#fullname').val(stBycode[0].name);
        $('#toan').val(stBycode[0].toan);
        $('#ly').val(stBycode[0].ly);
        $('#hoa').val(stBycode[0].hoa);
        $('#update_student').show();
        $('#add_student').hide();
        $('#code').prop('readonly',true);
    }
})
$(document).on('click', '#update_student',function(){
    var code = $('#code').val();
    studen.updateStudent(code);
    $('#std_form').trigger('reset');
    $('#update_student').hide();
    $('#add_student').show();
    $('#code').prop('readonly',false);
})

$(document).on('click', '.delete_student',function(){
    var stdCode:string = $(this).data('id');
    studen.deleteStudent(stdCode);
})
$(document).on('click', '.search_student',function(){
    let search_code:any =$('#search_code').val();
    if(search_code!=''){
        studen.findByName(search_code);
    }else{
        location.reload();
    }
   
})


// var name4 = 'Duy';
// var scope1 = function () {
//   // name is available here
//   console.log(name4);
//   var scope2 = function () {
//     // name is available here too
//     console.log(name4);
//     var scope3 = function () {
//       // name is also available here!
//       console.log(name4);
//     };
//     scope3();
//   };
//   scope2();
// };
// scope1();


