function setData():Array<any> {
    return[
        {name:'Nguyen QUoc Huy', code:'B123444',toan: 8 , ly: 9 ,hoa: 8},
        {name:'Nguyen Van Huy', code:'B1234456',toan: 7 , ly: 7 ,hoa: 8},
        {name:'Le Trung Hieu', code:'B1234475',toan: 6 , ly: 9 ,hoa: 8},
        {name:'Trinh Dinh Hieu', code:'B123455',toan: 9 , ly: 9 ,hoa: 9}
    ];
}
// in mangr
function inmang(data:any){
    var _tr:any = '';
    for(let obj of data){
        let maxAvg:any = ((obj.toan + obj.hoa + obj.ly)/3).toFixed(1);
        let xeploai:any ='';
        if(maxAvg<5){
            xeploai ='yếu';
        }else if(maxAvg>=5 && maxAvg <6.5){
            xeploai = 'Trung bình';
        }else if(maxAvg >=6.5 && maxAvg <8){
            xeploai =' Khá';
        }else if(maxAvg>= 8 && maxAvg <9){
            xeploai = 'Giỏi';
        }else{
            xeploai = 'Xuất Sắc';
        }
        _tr+= `
        <tr>
            <td >${obj.code}</td>
            <td>${obj.name}</td>
            <td >${obj.toan}</td>
            <td>${obj.ly}</td>
            <td >${obj.hoa}</td>
            <td>${maxAvg}</td>
            <td>${xeploai}</td>
        </tr>`
    }
    var tbody:any = document.getElementById('tbody-list');
    tbody.innerHTML = _tr;
} 
let myData = setData();
inmang(myData);


// ham,f loc= diem
var loc_diem = ():void =>{
    let diem:any = document.getElementById('diem');
    let myData = setData();
    let newdata:any = myData.filter(function(obj1){
        let maxxAvg:any= ((obj1.toan + obj1.hoa + obj1.ly)/3).toFixed(1);
        return maxxAvg >= diem.value;
    });
   inmang(newdata);
}
function sap_xep_theo_diem(select:any){
//  var tang_giam:any = document.getElementById('sap_xep');

    if(select.value == 'tang'){
        let myData = setData();
        let sortData = myData.sort(function(a,b){
            let maxxAvgA:any= ((a.toan + a.hoa + a.ly)/3);
            let maxxAvgB:any= ((b.toan + b.hoa + b.ly)/3);
            return maxxAvgA < maxxAvgB ? -1 : 0;
        });
        inmang(sortData);
    }else if(select.value == 'giam'){
        let myData = setData();
        let sortData = myData.sort(function(a,b){
            let maxxAvgA:any= ((a.toan + a.hoa + a.ly)/3);
            let maxxAvgB:any= ((b.toan + b.hoa + b.ly)/3);
            return maxxAvgA > maxxAvgB ? -1 : 0;
        });
        inmang(sortData);
    }else{
        let myData = setData();
        inmang(myData);
    }

}
