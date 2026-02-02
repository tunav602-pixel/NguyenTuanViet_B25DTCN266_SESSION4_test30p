//Câu 1: Kiểm tra tính chất số và điều hướng luồng
//●	Yêu cầu: Khai báo một biến số nguyên n (ví dụ: let n = 20;).
//●	Nhiệm vụ:
//1.	Kiểm tra xem n là số chẵn hay số lẻ. In ra thông báo: "Số [n] là số chẵn" hoặc "Số [n] là số lẻ".
//2.	Kiểm tra xem n là số dương, số âm hay bằng 0.
//3.	Nếu n > 0, sử dụng vòng lặp để in ra các số từ 1 đến n. Nếu n <= 0, in ra thông báo: "Giá trị n không hợp lệ để tạo dãy số".

let n = +prompt("Nhập sô nguyên n: ");

if(n % 2 === 0){
    console.log(`Số ${n} là số chẵn`);
} else if (n % 2 !== 0){
    console.log(`Số ${n} là số lẻ `);
}

if(n <= 0){
    console.log("Giá trị n không hợp lệ để tạo dãy số");   
} else{
    for (let i = 1 ; i <= n ; i++){
        console.log(i);
    }
}

//Câu 2: Giải quyết bài toán FizzBuzz và tính tổng tích lũy
//●	Yêu cầu: Viết một chương trình duyệt các số tự nhiên từ 1 đến 50.
//●	Nhiệm vụ:
//1.	Với mỗi số, kiểm tra:
//■	Nếu số chia hết cho 3: In ra "Fizz".
//■	Nếu số chia hết cho 5: In ra "Buzz".
//■	Nếu số chia hết cho cả 3 và 5: In ra "FizzBuzz".
//■	Trường hợp còn lại: In chính số đó.
//2.	Sau khi vòng lặp kết thúc, hãy tính và in ra Tổng của tất cả các số đã in ra chữ "Fizz" 
// (tức là tổng các số chia hết cho 3 nhưng không chia hết cho 5) trong khoảng từ 1 đến 50.

let number = 50;
let odd = 0 ;
let evenNumber = 0;
for(let i = 1 ; i <= 50 ; i++){
    if(i % 3 === 0){
        console.log("Fizz");
        evenNumber += i;
    }else if(i % 5 === 0){
        console.log("Buzz");
        odd += i;
    }else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else {
       console.log(i);
    }
}
console.log(evenNumber);

 



