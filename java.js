//The Task number one

//كود إنشاء المتغيرات 
let userName = "محمد";
let userAge = 25;
let isSubscribed = true;


console.log("Name :" + userName + "<br>" + "Age :" + userAge + "<br>" + "IsSubscribe :" + isSubscribed)
document.write("Name :" + userName + "<br>" + "Age :" + userAge + "<br>" + "IsSubscribe :" + isSubscribed + "<br><br>")


userName = "aryam";
userAge = 20;
isSubscribed = true;
console.log("Name :" + userName + "<br>" + "Age :" + userAge + "<br>" + "IsSubscribe :" + isSubscribed)
document.write("Name :" + userName + "<br>" + "Age :" + userAge + "<br>" + "IsSubscribe :" + isSubscribed)





//The Task number two
//برنامج حساب مساحة مستطيل 
let hight = 10;
let width = 5;
let area = hight * width
console.log("The Area :" + area)
document.write("<br><br>The Area :" + area)



//كود للتحقق من الرقم إذا كان أكبر من 10 وأقل من 20
let num = 17
if (num >= 10 && num <= 20) {
    console.log("The num is bigger than 10 and smaller than 20 ")
    document.write("<br><br>The num is bigger than 10 and smaller than 20 ")
}
else {
    console.log("The num not between 10 or 20")
    document.write("<br>The num not between 10 or 20")
}



//كود للتحقق من الرقم إذا كان أصغر أو يساوي 5 أو أكبر او يساوي 15

let number = 8
if (number <= 5 || number >= 15) {
    console.log("The number is smaller than 5 or bigger than 15")
    document.write("<br><br>The number is smaller than 5 or bigger than 15")

}
else {
    console.log("The number is Error")
    document.write("<br>The number is Error")
}


//كود للتحقق من الرقم إذا كان يقبل القسمة على 3 بدون باقي او لا


let numberToCheck = 9;
if (numberToCheck % 3 === 0) {
    console.log("الرقم يقبل القسمة على 3 بدون باقي");
    document.write("<br><br>الرقم يقبل القسمة على 3 بدون باقي");
}
else {
    console.log("الرقم لا يقبل القسمة على 3 بدون باقي");
    document.write("<br>الرقم لا يقبل القسمة على 3 بدون باقي");
}



//  كود لحساب باقي قسمة 100 على 7
let remainder = 100 % 7;
console.log("Remainder =" + remainder);
document.write("<br><br>Remainder =" + remainder);



//كود لحساب صافس راتب موظف 

let baseSalary = 5000;
let incomeTax = 0.15; // 15%
let socialTax = 0.05; // 5%

let Salary = baseSalary * (1 - incomeTax - socialTax);
console.log(`الراتب الصافي: ${Salary}`);





//كود لحساب الوقت المتبقي 
let Hour = 14;
let Minute = 30;

let secondsInADay = 24 * 60 * 60;
let secondsElapsed = (Hour * 60 * 60) + (Minute * 60);
let remainSeconds = secondsInADay - secondsElapsed;

console.log(`الوقت المتبقي من اليوم بالثواني: ${remainSeconds}`);



//كود للتحقق من الرقم إذا كان زوجي أو فردي 

let numbers = 8;

if (numbers % 2 === 0) {
    num *= 2;
} else {
    numbers -= 1;
}

console.log(`The Result : ${numbers}`);




//كود لحساب عدد الدقائق في عدد أيام معينة 

let days = 5;
let minutesInADay = 24 * 60;

let totalMinutes = days * minutesInADay;

console.log(`عدد الدقائق في ${days} أيام: ${totalMinutes}`);





//The Task number Three

//كود لحساب السعر النهائي والتحقق منه

let productPrice = 5000; // قيمة السعر الأساسي
let taxRate = 0.15; // نسبة الضريبة (15%)

let taxAmount = productPrice * taxRate; // حساب قيمة الضريبة

let finalPrice = productPrice + taxAmount; // حساب السعر النهائي بعد إضافة الضريبة
console.log(`السعر الأساسي: ${productPrice}`);
document.write(`السعر الأساسي: ${productPrice}`);

console.log(`قيمة الضريبة: ${taxAmount}`);
document.write(`قيمة الضريبة: ${taxAmount}`);

console.log(`السعر النهائي: ${finalPrice}`);
document.write(`السعر النهائي: ${finalPrice}`);



if (finalPrice > 100) {
    console.log("السعر مرتفع");
    document.write("السعر مرتفع");
}

else {
    console.log("السعر مقبول");
    document.write("السعر مقبول");
}



//The Task number four

//كود لحساب متوسط علامات الطلاب وتقديرهم
let grade = 85;

let gradeLetter;
if (grade >= 90 && grade <= 100) {
    gradeLetter = 'A';
} else if (grade >= 80 && grade < 90) {
    gradeLetter = 'B';
} else if (grade >= 70 && grade < 80) {
    gradeLetter = 'C';
} else if (grade >= 60 && grade < 70) {
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}


// طباعة رسالة تشجيعية بناءً على التقدير باستخدام switch
switch (gradeLetter) {
    case 'A':
        console.log("ممتاز!");
        break;
    case 'B':
        console.log("جيد جدًا!");
        break;
    case 'C':
        console.log("جيد!");
        break;
    case 'D':
        console.log("نجاح بصعوبة.");
        break;
    case 'F':
        console.log("رسوب، حاول مرة أخرى.");
        break;
    default:
        console.log("تقدير غير معروف.");
}


let grades = [85, 78, 92, 80, 77];

let total = 0;
for (let i = 0; i < grades.length; i++) {
    total += grades[i];
}

let average = total / grades.length;

console.log(`مجموع درجات الطلاب: ${total}`);
console.log(`المتوسط النهائي للدرجات: ${average}`);



//The Task number five

// let studentGrade = 85; 
// let grade;

// if (studentGrade >= 90 && studentGrade <= 100) {
//     grade = "A";
// } else if (studentGrade >= 80 && studentGrade < 90) {
//     grade = "B";
// } else if (studentGrade >= 70 && studentGrade < 80) {
//     grade = "C";
// } else if (studentGrade >= 60 && studentGrade < 70) {
//     grade = "D";
// } else {
//     grade = "F";
// }
// switch (grade) {
//     case "A":
//         console.log("ممتاز!");
//         break;
//     case "B":
//         console.log("جيد جدًا!");
//         break;
//     case "C":
//         console.log("جيد!");
//         break;
//     case "D":
//         console.log("نجاح بصعوبة.");
//         break;
//     case "F":
//         console.log("رسوب، حاول مرة أخرى.");
//         break;
//     default:
//         console.log("درجة غير صالحة.");
// }

// let grades = [95, 78, 92, 75, 70]; 
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
// }

// let average = total / grades.length;
// console.log(`متوسط درجات الطلاب: ${average.toFixed(2)}`);






