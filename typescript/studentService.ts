import { studentObject } from "./studentObject.js";

export class studentService{
    data: Array<studentObject> ;
    constructor(){
        this.data = this.setData();
    }
    setData():Array<studentObject>{
        let dataInstorage = localStorage.getItem('student_data');// dạng chuỗi
        if(dataInstorage){
            return JSON.parse(dataInstorage);// chuyển json thành mảng object
        }
        return [];
    }

    public showListData(){
        let tbody2:any = document.getElementById('tbody2');
        let _tr ='';
        for (const obj of this.data) {
            let dtb = ((obj.toan + obj.ly +obj.hoa)/3);
            let xeploai:any ='';
        if(dtb<5){
            xeploai ='yếu';
        }else if(dtb>=5 && dtb <6.5){
            xeploai = 'Trung bình';
        }else if(dtb >=6.5 && dtb<8){
            xeploai =' Khá';
        }else if(dtb>= 8 && dtb<9){
            xeploai = 'Giỏi';
        }else{
            xeploai = 'Xuất Sắc';
        }
            _tr+=`
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
                
            </tr>`
        }
        tbody2.innerHTML = _tr;
    }
    addStudent():void{
    var form:any = document.getElementById('std_form');
    let std: studentObject = {
        code : form.code.value,
        name : form.fullname.value,
        toan : parseFloat(form.toan.value),
        ly : parseFloat(form.ly.value),
        hoa : parseFloat(form.hoa.value),

    };
    this.data.push(std);
    // chuyển mảng đối tượng xang chuỗi json.
    let jsonData =JSON.stringify(this.data);
    // lưu vào storage
    localStorage.setItem('student_data',jsonData);
    this.showListData();
   

    }
    deleteStudent(code:string):void{
        let index = this.data.findIndex(function(obj){
            return obj.code == code;
        })
        // loại bỏ ptu mang theo index
        this.data.splice(index,1);
        let jsonData =JSON.stringify(this.data);
     // lưu vào storage
        localStorage.setItem('student_data',jsonData);
        this.showListData();
    }
    findByName(name:string):any{
        let search_data = this.data.filter(function(obj){
            return obj.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
        })
        this.data = search_data;
        this.showListData();
    }
    findByCode(code:string):any{
        let search_data = this.data.filter(function(obj){
            return obj.code.toLocaleLowerCase()==code.toLocaleLowerCase();
        })
       return search_data;
    }
    updateStudent(code:string):any{
        let index = this.data.findIndex(function(obj){
            return obj.code == code;
        })
        var form:any = document.getElementById('std_form');
        this.data[index].name = form.fullname.value;
        this.data[index].toan = parseFloat(form.toan.value);
        this.data[index].ly = parseFloat(form.ly.value);
        this.data[index].hoa= parseFloat(form.hoa.value);
        let jsonData =JSON.stringify(this.data);
     // lưu vào storage
        localStorage.setItem('student_data',jsonData);
        this.showListData();
    }
}