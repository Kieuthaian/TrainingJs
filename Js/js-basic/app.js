// base 
/**
 * data type:
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * - Object
 * - Symbol
 */
// var name = "CyberSoft";
// console.log(name);
// name = 89;
// console.log(name);
// // biến trong js tự đổi kiểu dữ liệu
// name = true;
// console.log(name);
// var numberOne = "9";
// var numberTwo = 10;
// var total = numberOne + numberTwo;
// console.log(total);

// // variale and constant
// const PI = 3.14;
// let radiusCircle = 10;
// let areaCircle = radiusCircle * radiusCircle * PI;
// let parimeterCircle = radiusCircle * 2 * PI;
// console.log(areaCircle);
// console.log(parimeterCircle);

// condition 
/**
 * Các bài toán hay yêu cầu nghiệp vụ có những thứ sau
 * - Xét điều kiện 
 *  if (condition) {
 *    // code
 *  }
 * 
 *  if (condition) {
 *      //code
 *  } else {
 *      //code
 *  }
 * 
 *  switch (choice / case) {
 *      case (case1):
 *          //code
 *      break;
 *      
 *      case (case2):
 *          // code
 *      break;
 *      .....
 *      default: 
 *          //code
 *  }
 */

/**
 *  Biểu thức điều kiện: A - B: true / false
 *  A && B -> trả về true khi cả 2 đều true, còn lại là false
 * A || B -> trả về false khi cả 2 đều false, còn lại là true
 * !A -> ngược lại của A  (phủ định của A)
 * A == B (So sánh không cần kiểu dữ liệu, ví dụ "0" == 0 -> true)
 * A === B (so sánh cả kiểu dữ liệu và giá trị, ví dụ "'0' === 0" -> false -> khuyên dùng)    
 */

// Array 
// tổ chức lưu trữ mảng
// giá trị và chỉ số
// key / index -> value
// firstIndex = 0
// lastIndex = length - 1

// let cars = new Array();
// cách 1
let cars = new Array('Honda', 'Toyota', 'BMW')
cars[3] = "Wolf";
console.log(cars);

// cách 2
let people = ['Nam', 'An', 'Liên'];
people[3] = "Trần";
console.log(people);

// .push: thêm phần tử ở cuối mảng
// .indexOf : tìm phần tử đầu tiên là 0 thì sẽ dừng, ko thấy là -1
// .lastIndexOf: tìm thấy chỉ số cuối cùng
// people.push("CyberLearn");
// people.push("CyberLearn New");
// console.log(people);
// let index1 = people.indexOf("CyberLearn");
// let index2 = people.lastIndexOf("CyberLearn")
// console.log(index1);
// console.log(index2);


// Vòng lặp
/**
 * for - vòng lặp theo index
 * for/in - lặp trên từng thuộc tính của từng đối tượng 
 * for / of - lặp thông qua các giá trị của một đối tượng có tính lặp (Mảng, chuỗi, Map, ...)
 * while - lặp thông qua điều kiện đúng
 *  do / while - tương tự while nhưng thực hiện lệnh trước 1 lần
 */
// let nameStudent = ['Nam', 'Liên', 'Nguyen'];
// for (let i = 0; i< nameStudent.length; i++) {
//     console.log(nameStudent[i]);
// }

// for (let k of nameStudent) {
//     console.log(k);
// }
// let j = 0;
// while (j < nameStudent.length) {
//     console.log(nameStudent[j]);
//     j++;
// }

/** 
 * Function 
 *  // Xử lý nhập
 *  // 10 dòng lệnh 
 *  
 *  // Xử lý nghiệp vụ 1
 *  // 40 dòng lệnh
 * 
 *  // Xử lý nghiệp vụ 2
 *  // 80 dòng lênh
 *  
 * => Quá dài, khó sửa đổi, tìm lỗi, bảo trì
 * => Không tái sử dụng đoạn code cho nhiều nơi
 * 
 * --> tách hàm
 * => Giúp tái sử dụng lại được code
 * => Code gọn, dễ xử lý
 * => Dễ bảo trì , nâng cấp
 * => Mỗi developer một module, một function dễ phát triển và chia task
 * 
 * function nameFunction (parameter) {
 *      bodyFunction, code
 * }
 * nameFunction: đặt tên có ý nghĩa như sumTotal, countSalary, addEmployee
 * bắt đầu bằng động tự
 * 
 * parameter: tham số truyền vào - đưa truyền dữ liệu từ bên ngoài vào trong hàm để dễ xử lý
 */