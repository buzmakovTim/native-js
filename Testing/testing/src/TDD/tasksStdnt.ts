// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum( ...nums: Array<any>): number {
    return nums.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
   let result = ''
    if((a + b) < c || (b + c) < a || (c + a) < b) {
        return '00'
    } else if ( a === b && b === c && c === a) {
        return '10'
    } else if ((a === b || b === c || c === a) && (a !== b || b !== c || c !== a)) {
        return '01'
    } else {
        return '11'
    }
        
    
    //return result
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    let result = 0

    while(number > 0) {

        let rest = number % 10
        result += rest
        number = (number - rest) / 10
    }
    return result
}

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach( (i, index) => {
       index % 2 === 0 ? evenSum += i : oddSum += i 
    } )

    return evenSum > oddSum ? true : false
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    
    return ((areaSq / 4) * 3.1415) < areaCr ? false : true
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result : Array<number> = []

    let i = 0
    while(amountOfMoney > 0) {
        
        if(banknotes[i] <= amountOfMoney) {
            result.push(banknotes[i])
            amountOfMoney = amountOfMoney - banknotes[i]
        } else {
            i++
        }

    }

    return result
}