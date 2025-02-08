

let words = [
    ["Напишите функцию is_palindrome(s), которая принимает строку и возвращает True, если строка является палиндромом, и False в противном случае. (В ответе вместо абзаца используйте один пробел)",
    "def is_palindrome(s): return s == s[::-1] print(is_palindrome(input()))",
    "1class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Функции.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Напишите функцию sum_of_digits(n), которая принимает целое неотрицательное число и возвращает сумму его цифр Выведите результат, используя эту функцию. (В ответе вместо абзаца используйте один пробел)",
    "def sum_of_digits(n): S = while n != 0: S += n % 10 n //= 10 return s n = int(input()) print(sum_of_digits(n))",
    "1class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Функции.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Напишите функцию dividers(n), которая по заданному натуральному числу n находит все его делители и возвращает список из них. Для заданного числа выведите всего его делители в порядке возрастания, разделяя значения пробелами. (В ответе вместо абзаца используйте один пробел)",
    "def dividers(n): div = [] for d in range(1, n + 1): if n % d == 0: div.append(d) return div n = int(input()) print(*dividers(n))",
    "1class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Функции.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Выведите все элементы списка с четными индексами (то есть A[0], A[2], A[4],…). (В ответе вместо абзаца используйте один пробел)",
    "print(*input().split()[::2])",
    "2class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Списки (list).mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дан список чисел. Если в нем есть два соседних элемента одного знака, выведите эти числа. Если соседних элементов одного знака нет - не выводите ничего. Если таких пар соседей несколько - выведите первую пару. (В ответе вместо абзаца используйте один пробел)",
    "a = [int(x) for x in input().split()] for i in range(len(a) - 1): if a[i] * a[i + 1] > 0: print(a(i], a(i + 1]) break",
    "2class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Списки (list).mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дан список чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. Если наибольших элементов несколько, выведите индекс первого из них. (В ответе вместо абзаца используйте один пробел)",
    "a = [int(x) for x in input().split()] n, indn = -float('inf'), 0 for i in range(len(a)): if a[i] > n: n, indn = a[i], I print(n, indn)",
    "2class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Списки (list).mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дана строка. Разрежьте ее на две равные части (если длина строки - четная, а если длина строки нечетная, то длина первой части должна быть на один символ больше). Переставьте эти две части местами, результат запишите в новую строку и выведите на экран. При решении этой задачи не стоит пользоваться инструкцией if. (В ответе вместо абзаца используйте один пробел)",
    "s = input() ind = (len(s) + 1) // 2 part1 = s[:ind] part2 = s[ind:] print(part2 + part1)",
    "3class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Строки.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],                                                        
    ["Дана строка. Если в этой строке буква f встречается только один раз, выведите её индекс. Если она встречается два и более раз, выведите индекс её первого и последнего появления. Если буква f в данной строке не встречается, ничего не выводите. (В ответе вместо абзаца используйте один пробел)",
    "s = input() if s.count('f') == 1: print(s.find('f')) elif s.count('f') > 1: print(s.find('f'), s.rfind('f'))",
    "3class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Строки.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дана строка. Удалите из нее все символы, чьи индексы делятся на 3. (В ответе вместо абзаца используйте один пробел)",
    "s = input() scopy = '' for i in range(len(s)): if i % 3 != 0: scopy += s[i] print(scopy)",
    "3class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Строки.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["По данному целому числу N распечатайте все квадраты натуральных чисел, не превосходящие N, в порядке возрастания. (В ответе вместо абзаца используйте один пробел)",
    "N = int(input()) i = 1 while i**2 <= N: print(i**2) i += 1",
    "4class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл While.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],                                                        
    ["В первый день спортсмен пробежал х километров, а затем он каждый день увеличивал пробег на 10% от предыдущего значения. П данному числу у определите номер дня, на который пробег спортсмена составит не менее у километров. Программа получает на вход действительные числа х и у и должна вывести одно натуральное число. (В ответе вместо абзаца используйте один пробел)",
    "X = int(input()) y = int(input()) n = 1 while x < y: x *= 1.1 n += 1 print(n)",
    "4class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл While.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Последовательность состоит из натуральных чисел и завершается числом 0. Определите, сколько элементов этой последовательности равны ее наибольшему элементу. (В ответе вместо абзаца используйте один пробел)",
    "a = int(input()) m = countm = 0 while a != 0: if a > m: m, countm = a, 1 elif a == m: countm += 1 a = int(input()) print(countm)",
    "4class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл While.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Даны два целых числа А и В. Выведите все числа от А до В включительно, в порядке возрастания, если А < В, или в порядке убывания в противном случае. (В ответе вместо абзаца используйте один пробел)",
    "A = int(input()) B = int(input()) if A < B",
    "5class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл For.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Даны два целых числа А и В, А > В. Выведите все нечётные числа от А до В включительно, в порядке убывания. В этой задаче можно обойтись без инструкции if. (В ответе вместо абзаца используйте один пробел)",
    "A = int(input()) B = int(input()) for n in range(A - (A + 1) % 2, B - 1, -2): print(n, end = '')",
    "5class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл For.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],                                                        
    ["Дано N чисел: сначала вводится число N, затем вводится ровно N целых чисел. Подсчитайте количество нулей среди введенных чисел и выведите это количество. Вам нужно подсчитать количество чисел, равных нулю, а не количество цифр. (В ответе вместо абзаца используйте один пробел)",
    "N = int(input()) count = 0 for _ in range(N): if int(input()) == 0: count += 1 print(count)",
    "5class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Цикл For.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дано натуральное число. Выведите его последнюю цифру. (В ответе вместо абзаца используйте один пробел)",
    "n = int(input()) print(n % 10)",
    "6class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Вычисления.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Компания производит закупку товаров у поставщика. Компании нужно приобрести п товаров. Поставщик продает товары в упаковках: в каждой упаковке m товаров. Определите минимальное количество упаковок, которое нужно закупить. В первой строке вводится значение n, во второй значение m. (В ответе вместо абзаца используйте один пробел)",
    "from math import ceil n = int(input()) m = int(input()) print(ceil(n / m))",
    "6class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Вычисления.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["За день машина проезжает n километров. Сколько дней нужно, чтобы проехать маршрут длиной m километров? Программа получает на вход числа n и m. (В ответе вместо абзаца используйте один пробел)",
    "from math import ceil n = int(input()) m = int(input()) print(ceil(m / n))",
    "6class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Вычисления.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],                                                        
    ["Даны два целых числа. Выведите значение наименьшего из них. Рекомендуется использовать конструкцию if. (В ответе вместо абзаца используйте один пробел)",
    "a = int(input()) b = int(input()) if a < b: print(a) else: print(b)",
    "7class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Условия IF.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Даны три целых числа. Определите, сколько среди них совпадающих. Программа должна вывести одно из чисел: 3 (если все совпадают), 2 (если два совпадает) или 0 (если все числа различны). (В ответе вместо абзаца используйте один пробел)",
    "a, b, c = int(input()), int(input()), int(input()) if a == b == c: print(3) elif a == b or a == c or b == c: print(2) else: print(0)",
    "7class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Условия IF.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],                                                        
    ["Шахматный ферзь ходит по диагонали, горизонтали или вертикали. Даны две различные клетки шахматной доски, определите, может ли ферзь попасть с первой клетки на вторую одним ходом. (В ответе вместо абзаца используйте один пробел)",
    "x1, y1 = int(input()), int(input()) x2, y2 = int(input()), int(input()) if abs(x1 - x2) == abs(y1 - y2) or x1 == x2 or y1 == y2: print('YES') else: print('NO')",
    "7class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Условия IF.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Напишите программу, которая считывает длины двух катетов в прямоугольном треугольнике и выводит его площадь. Каждое число записано в отдельной строке. (В ответе вместо абзаца используйте один пробел)",
    "a = int(input()) b = int(input()) print(a * b / 2)",
    "8class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Ввод-вывод данных.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Дано число n. С начала суток прошло n минут. Определите, сколько часов и минут будут показывать электронные часы в этот момент. Программа должна вывести два числа: количество часов (от 0 до 23) и количество минут (от 0 до 59). Учтите, что число n может быть больше, чем количество минут в сутках. (В ответе вместо абзаца используйте один пробел)",
    "m_in_day = 24 * 60 n = int(input()) % m_in_day h = n // 60 m = m % 60 print(h, m)",
    "8class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Ввод-вывод данных.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["В однокруговом турнире без ничьих участвовало N команд (каждая сыграла с каждой по одному матчу). Победителями считаются все команды, которые выиграли не меньше партий, чем остальные. Какое наибольшее количество победителей может быть в таком турнире? Вводится одно натуральное число - количество команд. Выведите одно число - наибольшее возможное количество победителей в таком турнире. (В ответе вместо абзаца используйте один пробел)",
    "n = int(input()) res = n - (n + 1) % 2 print(res)",
    "8class", "letters1", "<video width='880' height='550' controls><source src='Python для ЕГЭ. Ввод-вывод данных.mp4' type='video/mp4'>Your browser does not support the video tag</video>"],
    ["Ввод целого числа a с пояснениями, ввод вещественной переменной z с пояснениями, ввод строковой переменной x с пояснениями, ввод логической переменной f с пояснениями. (Укажите 4 ответа через запятую. В ответе вместо абзаца используйте один пробел)",
    "a = int (input('a = ')), z=float (input('z = ')), x=str (input('x = ')), f = bool (input('f = '))",
    "9class", "letters1", "<embed src='Python-211.pdf' type='application/pdf' width='880' height='550'>"],
    ["Получение целого числа x1 с помощью генератора случайных чисел. (В ответе вместо абзаца используйте один пробел)",
    "from random import * x1 = randint(a,b)",
    "9class", "letters1", "<embed src='Python-211.pdf' type='application/pdf' width='880' height='550'>"],
    ["Получение вещественного числа x2 с помощью генератора случайных чисел. (В ответе вместо абзаца используйте один пробел)",
    "from random import * x2 = uniform(a, b)",
    "9class", "letters1", "<embed src='Python-211.pdf' type='application/pdf' width='880' height='550'>"],
]

let list_class = [
    ["all", "Все курсы"],
    ["1class", "Функции"],
    ["2class", "Списки (list)"],
    ["3class", "Строки"],
    ["4class", "Цикл While"],
    ["5class", "Цикл For"],
    ["6class", "Вычисления"],
    ["7class", "Условия IF"],
    ["8class", "Ввод-вывод данных"],
    ["9class", "Презентация"],
];

let list_letters = [
    ["all", " "],
    ["letters1", " "],
];

let starttimer = document.getElementById("starttimer");

const filter_words = (word) => {
    if(engl_opt_class == "all") {
        if((engl_opt_letter[0] == "all") || (engl_opt_letter.includes(word[3]))){
            return word;
        }
    } else {
        if ((word[2] == engl_opt_class) && 
            ((engl_opt_letter[0] == "all") || (engl_opt_letter.includes(word[3])))) {
                return word;
        }
    }
};

function filterByLetter(word){
    // 0 - class
    // 1 - letter
    // console.log(word,this[0],this[1]);
    if(this[0] == "all") {
        if(this[1] == word[3]){
            return word;
        }
    } else {
        if ((word[2] == this[0]) && (this[1] == word[3])) {
                return word;
        }
    }
};
const filterByClass = (word) => {
    if((rus_lesson_class == "all") && (word[3] == rus_lesson_letter)){
        return word;
    } else {
        if ((word[2] == rus_lesson_class) && (word[3] == rus_lesson_letter)){
            return word;
        }  
    }
};
let select = document.getElementById("lesson_classes");
let cards = document.querySelectorAll(".cards-listcard")
cards.forEach( (el) => {
    el.classList.add('show');
}
);
let rus_lesson_class = "all";
let rus_lesson_letter;

if(select != null) {
    let cardsList = document.getElementById("cards-list");
    function showLesson(value) {
        if(cardsList == null) return false;
        cardsList.innerHTML = '';
        for(let c = 0;c < list_class.length;c++) {
            if((value == "all") || (value == list_class[c][0])){
                rus_lesson_class = list_class[c][0];
                for(j = 1;j < list_letters.length; j++){
                    rus_lesson_letter = list_letters[j][0];
                    let lessons = words.filter(filterByClass);
                    // console.log(lessons.length);
                    isFirst = false;
                    for(let x = 0; x < lessons.length; x++) {
                        for(let y = 0; y < lessons.length; y++) {
                            if(lessons[x][4] === lessons[y][4]) {
                                isFirst = true;
                                // console.log("lessons[x][4]", lessons[x][4]);
                                // console.log("lessons[y][4]",lessons[y][4]);
                            }
                            if (isFirst) {
                                lessons.splice(y, 1);
                            }
                        }
                    }

                    let item_letter = document.createElement("li");
                    item_letter.classList.add("card");
                    item_letter.classList.add("show");
                    let header_letter = document.createElement("h2");
                    header_letter.innerHTML = list_letters[j][1].toUpperCase();
                    item_letter.append(header_letter);
        
                    for(i = 0; i< lessons.length;i++) {
                        let div = document.createElement("div");
                        div.innerHTML = div.innerHTML + lessons[i][4];
                        item_letter.append(div);
                    }
                    if(lessons.length != 0) {
                        cardsList.append(item_letter);
                    }
                }
                if(value == "all"){
                    break;}
            }
        }
    }
    select.addEventListener("change", (event) => {
        event.preventDefault();
        showLesson(event.target.value)
    });
    showLesson("all")
}



let data = words;
let id;
let query_quest = [];

let engl_opt_class;
let engl_opt_letter = [];
engl_opt_class = localStorage.getItem("engl_opt_class");
let engl_opt_letter_src = localStorage.getItem("engl_opt_letter");
if (engl_opt_letter_src != null) {
    engl_opt_letter = JSON.parse(engl_opt_letter_src);
}

if (engl_opt_class == null) { engl_opt_class = "all"; }
if (engl_opt_letter == null) { engl_opt_letter = ["all"]; }

if(starttimer != null) {
let engl_opt_timer_src = localStorage.getItem("engl_opt_timer");
if(engl_opt_timer_src == "Y")
    {starttimer.checked = true;}
else
    {starttimer.checked = false;}
}

let select_class = document.getElementById('classes');
if(select_class != null){
    for(let i=0;i<list_class.length;i++) {
        let opt = document.createElement("option");
        opt.innerHTML = list_class[i][1];
        opt.value = list_class[i][0];

        select_class.append(opt);
    }
    select_class.value = engl_opt_class;
}

let select_letters = document.getElementById('letters');
if(select_letters != null) {
    for(let i=0;i<list_letters.length;i++){
        let l = words.filter(filterByLetter, [engl_opt_class, list_letters[i][0]]);
        // console.log(l,[engl_opt_class, list_letters[i][0]]);
        if(i==0 || l.length>0) {
            let opt = document.createElement("option");
            opt.innerHTML = list_letters[i][1];
            opt.value = list_letters[i][0];
            for(let j=0;j<engl_opt_letter.length;j++){
                if(list_letters[i][0] == engl_opt_letter[j]){
                    opt.selected = true;
                    break;
                }
            }
            select_letters.append(opt);
        }
    }
    // select_letters.value = engl_opt_letter;
}


let engl_result = [];
let engl_result_src = localStorage.getItem("engl_result");
if (engl_result_src != null) {
    engl_result = JSON.parse(engl_result_src);
}
//console.log('engl_result',engl_result);


let headers2 = [
    "Дата тестирования",
    "Правильных ответов",
    "Всего вопросов",
    "Вопросы курса",
    " ",
    "Время тестирования"
];
function show_result() {
    let table = document.createElement("table");
    table.classList.add("result-table");
    table.setAttribute("id", "tbl");
    table.setAttribute("cellpadding", "0");
    table.setAttribute("cellspacing", "0");
    
    let tr = document.createElement("tr");
    for (let i = 0; i < headers2.length; i++) {
        let td = document.createElement("th");
        td.classList.add("result-table_cell");
        td.innerHTML = headers2[i];
        tr.append(td);
    }
    table.append(tr);

    for (let i = engl_result.length-1; i >=0 ; i--) {
        let tr = document.createElement("tr");
        tr.classList.add("result-table_cell");

        for (let j = 0; j < engl_result[i].length; j++) {
            let td = document.createElement("td");
            td.classList.add("result-table_cell");
            if(j == 3) {
                td.innerHTML = list_class.filter((classi) => classi[0] == engl_result[i][j])[0][1];
            } else {  
                if(j == 4) {
                    td.innerHTML = '';
                    console.log('list_letters',list_letters);
                    for(let l = 0;l< engl_result[i][j].length;l++){
                        td.innerHTML = td.innerHTML + list_letters.filter((letter) => letter[0] == engl_result[i][j][l])[0][1];
                        // td.innerHTML = td.innerHTML + engl_result[i][j];
                        if(l < engl_result[i][j].length-1) td.innerHTML =td.innerHTML + ", ";
                    }
                } else               
                    td.innerHTML = engl_result[i][j]; 
            }   
            tr.append(td);
        }
        table.append(tr);
    }
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan","5");
    if(engl_result.length != 0) {
        let bnt_reset = document.createElement("button");
        bnt_reset.innerHTML = "Сброс результатов";
        bnt_reset.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("engl_result", JSON.stringify([]));
            engl_result = [];
            let resultTable = document.getElementById("result-table");
            resultTable.innerHTML ='';
            resultTable.append(show_result());
        });
        td.append(bnt_reset);

    }else {
        td.innerHTML = "Результатов еще нет";
    }
    tr.append(td);
    table.append(tr);

    return table;
}

//таймер
let stopwatch = document.getElementById("stopwatch");
if(stopwatch != null){

    //объявляем переменные
    var base = 60;
    var clocktimer, dateObj, dm, ds, ms;
    var readout = '';
    var m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;

    //функция для очистки поля
    function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    init = 0;
    readout = '00:00';
    
    stopwatch.value = readout;
    }

    //функция для старта секундомера



    function StartTIME() {
        var cdateObj = new Date();
        var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
        if (t > 999) {
            s++;
        }
        if (s >= (m * base)) {
            ts = 0;
            m++;

        } else {
            ts = parseInt((ms / 100) + s);
            if (ts >= base) {
            ts = ts - ((m - 1) * base);
            }
        }
        if (m > (h * base)) {

            

        // остановка теста
        form.style.display = "none";
        StartStop();
        
        resultTable.innerHTML ='';
        let engl_result_cur = [];
        resultTable.append(show(headers, answers, engl_result_cur));
        engl_result.push(engl_result_cur);
        resultTable.append(show_result());
        console.log("engl_result_cur",engl_result_cur);
        console.log("engl_result",engl_result);
        localStorage.setItem('engl_result', JSON.stringify(engl_result));
        
        state = "result";
        render_forms();





        } else {
            tm = parseInt((ms / 100) + m);
            if (tm >= base) {
            tm = tm - ((h - 1) * base);
            }
        }

        if (ts > 0) {
            ds = ts;
            if (ts < 10) {
            ds = '0' + ts;
            }
        } else {
            ds = '00';
        }
        dm = tm - 1;
        if (dm > 0) {
            if (dm < 10) {
            dm = '0' + dm;
            }
        } else {
            dm = '00';
        }

        readout = dm + ':' + ds;
        stopwatch.value = readout;
        clocktimer = setTimeout("StartTIME()", 1);
    }

    //Функция запуска и остановки
    function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else {
        clearTimeout(clocktimer);
        init = 0;
    }
    }
}
