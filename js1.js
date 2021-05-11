// var car = {name:'Fiat',
//     model:500,
//     weight:'850kg',
//     color:'White'
//     // ที่อยู่ใน '...' หรือ : จะเป็น properties
//     atart: function() {
//         alert(this.name + 'Engine started');
//     }
// }
// car.cc = 2000;
// alert(car.cc);

// var products={};
// products.name = 'Box' ;
// products.price = 100;
// products.amount = 6;
// products.color = "Blue";
// products.total = function() {
//     return this.price * this.amount 
// }
// alert("Total price is " + products.total());

// var employee = new Object();
// // ใช้คีย์เวิร์ด new และคีย์เวิร์ด Object
// employee.id = 100;
// employee.name = 'Jane Drinkmilk';
// employee.salary = 50000;
// document.write(`Id: ${employee.id} Name= ${employee.name}
//                     Salary: ${employee.salary}`);

function emp(id,na,salary){
    this.id = id;
    this.name = na;
    this.salary = salary
    // กำหนดตัวแปร
}
employee1 = new emp(101, "John Drinkwater", 100000);
employee2 = new emp(102, "Jane Drinkmilk", 50000);
employee3 = new emp(103, "Jone Drinkcoffee", 60000);
// ใส่ข้อมูลตามลำดับตัวแปร
document.write(employee1.id + "<br>"); 
document.write(employee1.name + "<br>"); 
document.write(employee1.salary + "<br>"); 
// เขียนฟังก์ชั่น
00+22+33