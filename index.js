// Вопрос 1
// Как написать функцию, которая принимает массив строк и возвращает новый массив, где каждая строка написана в обратном порядке?

function revStr(strArr) {
    let newArr = [];
    for (const word of strArr) {
        newArr.push(word.split('').reverse().join(''))
    }
    return newArr;
};
let strArr = ['папа', 'мама', 'логопед'];
console.log(revStr(strArr));

// Вопрос 2
// Каким образом можно изменить цвет текста элемента с классом "text-color" на красный с использованием JavaScript?

const textColor = document.querySelector('.text-color')

textColor.style.color = 'red';

// Вопрос 3
// Напишите функцию, которая фильтрует массив чисел, оставляя только те, которые делятся на 2 без остатка.

function evenNum(numArr) {
    let res = numArr.filter((el) => {
        if (el % 2 == 0) {
            return el;
        }
    })
    return res;
}

numArr = [11, 12, 13, 14, 15];
console.log(evenNum(numArr));

// Вопрос 4
// Как можно получить и вывести в консоль значение выбранного пользователем элемента в выпадающем списке (<select>) с id "userSelection"?

const userSelection = document.getElementById('userSelection');
userSelection.addEventListener('input', () => {
    for (const user of userSelection) {
        if(user.selected) {
            console.log(user.textContent)
        }
    }
}) 

// Вопрос 5
// Напишите функцию, которая принимает число в качестве аргумента и возвращает строку, содержащую "четное" или "нечетное" в зависимости от числа.

// Вопрос 6
// Как можно удалить последний элемент из массива arr? Приведите пример кода.

arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);

// Вопрос 7
// Напишите функцию, которая принимает две строки и возвращает true, если они являются анаграммами друг друга. Анаграмма - это паллиндром в мире строк))

// Вопрос 8
// Как можно сделать элемент с id "image" невидимым без изменения свойства display?

// const image = document.getElementById('image')

// image.style.opacity = '100%';

// Вопрос 9
// Напишите функцию, которая принимает массив и возвращает его первый и последний элементы в новом массиве.

function firstLast (flArr) {
    let newFlArr = [];
    newFlArr.push(flArr.shift());
    newFlArr.push(flArr.pop());
    return newFlArr;
}
console.log(firstLast([3,4,5,6,7]))

// Вопрос 10
// Напишите функцию, которая принимает массив объектов и возвращает сумму значений свойства "age" для всех объектов.

// Вопрос 11
// Используя метод forEach, как вы можете добавить к каждому элементу списка <ul> HTML класс "list-item"?

// const ul = document.querySelector('ul');

// ul.forEach(element => {
//     element.classList.add('list-item');
// });

// Вопрос 12
// Как можно удалить класс "inactive" у элемента с id "status" и добавить ему класс "active"?

// const stats = document.getElementById('status');

// stats.classList.remove('inactive');
// stats.classList.add('active');

// Вопрос 13
// Как можно изменить шрифт всех параграфов на странице на "Arial" с помощью JavaScript?

// const allP = document.querySelectorAll('p')

// for (const p of allP) {
//     p.style.fontFamily = 'Arial';
// }

// Вопрос 14
// Используя map, напишите код, который преобразует массив чисел, умножая каждое число на его порядковый номер в массиве.

const newArr = [43, 56, 78];
let res = newArr.map((value, index) => {
    
    return value*index
})
console.log(res);

// Вопрос 15
// Как вы можете использовать filter для выбора всех элементов массива с длиной строки больше 3 символов?
