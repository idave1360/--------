// Node.js의 readline 모듈을 사용하여 터미널에서 사용자 입력 받기
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('구구단 몇 단을 계산할까요? ', dan => {
    console.log(`${dan}단:`);
    if (dan < 1 || dan > 9 || isNaN(dan)) {
        console.log('1부터 9까지의 숫자를 입력해주세요.');
    } else {
        for (let i = 1; i <= 9; i++) {
            console.log(`${dan} * ${i} = ${dan * i}`);
        }
    }
    readline.close();
});
