/**
 * DOM - Document Object Model
 * - Dom giúp ta lấy được các thẻ (object) để tương tác dữ liệu: thay đổi dữ liệu, cập nhật dữ liệu, thay đôi thành phần html
 * 
 * Cách lấy
 * - 1. Lấy qua ID của thẻ (ID identify - duy nhất ko được trùng tên khi đặt id)
 * - 2. Lấy qua tên thẻ (tagname)
 * - 3. Lấy qua class css của thẻ
 * - 4. Sử dụng phương thức querySelector & querySelectorAll
 * 
 * C1: Lấy qua ID của thẻ
 * Cú pháp: document.getElementById(elementID)
 * Lưu ý: sau khi trả về cho biến test, biến test sẽ làm một object Element đó. Nếu không sẽ trả về null
 */
// test là 1 object
// let test = document.getElementById("username");
// console.log(test);
// let theP = document.getElementById("theP");
// console.log(theP);
// function getEle(id) {
//     return document.getElementById(id);
// }
// function changeInnerHtml(id, text) {
//     var theP = getEle(id);
//     theP.innerHTML = text;
// }
function getEle(id) {
    return document.getElementById(id);
}
// function change() {
//     // let theP = document.getElementById("theP");
//     let theP = getEle("theP")
//     theP.innerHTML = "Đã thay đổi thông tin HTML";
// }
function changeInner(id, content) {
    var ele = getEle(id);
    ele.innerHTML = content;
}
// function change() {
//     changeInner("theP", "Thay đổi nội dung đã hoàn thiện");
//     let none = document.getElementById("theP").style.display = "none";
// }
// function changeNow() {
//     changeInner("content1", "Xin chào XTP");
// }

// //  Thiết lập css style
// let red = document.getElementById("theP").style.color = 'red';