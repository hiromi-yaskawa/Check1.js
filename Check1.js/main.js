//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
let number = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓

function isEven(num) {
    if (num[i] % 2 == 0); {
        return false;
    }
}

let numbers = [2, 5, 12, 13, 15, 18, 22];

console.log(numbers);
for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers % 2 == 0) {
        continue;
    }
    console.log(numbers[i] + 'は偶数です');
}

//問2:以下の要件を満たすように実装してください。
//【要件】
//・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
//・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
let car = {
    getNumGass: 20.5,
    getNumGas: 5678,
}
console.log(car);
console.log('ガソリンは' + car.getNumGass + 'です');
console.log('ナンバーは' + car.getNumGas + 'です');