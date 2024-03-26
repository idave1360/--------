// 반복문
// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// 배열순회
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
});