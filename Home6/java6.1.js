

// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘’
//
// ‘’
//
// ‘’
const a='hello world'
const b='lorem ipsum'
const c='javascript is cool'
console.log(a.length,b.length,c.length);
let vorld=[a,b,c];
for (let item of vorld){
    console.log(item.length);
}

// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
const aV='hello world'
const bV='lorem ipsum'
const cV='javascript is cool'
console.log(a.toUpperCase(),b.toUpperCase(),c.toUpperCase());
let upper=[aV,bV,cV];
for (let item of upper){
    console.log(item.toUpperCase());
}
function upp(string){
    return string.toUpperCase()
}
console.log('upper')
console.log(upp(aV));
console.log(upp(bV));
console.log(upp(cV));

// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘’, ‘’, ‘’

const aL='HELLO WORLD'
const bL='LOREM IPSUM'
const cL='JAVASCRIPT IS COOL'
function lov(lover){
    return lover.toLowerCase()
}
console.log(lov(aL))
console.log(lov(bL))
console.log(lov(cL))

// – Є “брудна” стрінга let str = ‘‘ . Почистити її від зайвих пробілів.
const dir=' dirty string   '
const clen=dir.trim()
console.log(dir)
console.log(clen)
console.log(dir.length)
console.log(clen.length)

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let poems='Ревуть воли як ясла повні'
function stringToArray(poem){
    return poem.split(' ');
}

console.log(stringToArray(poems));

function stringToString(poems){
    if (poems){
        const split = poems.split(' ');
        return split;
    }
    return [' ']

}
console.log(stringToString(poems))
// – є масив чисел  . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.



let arrNam=[10,8,-7,55,987,-1011,0,1050,0]
let namberString=arrNam.map(arrNam=>arrNam +' ')
console.log(namberString)

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
let nums = [11,21,3];
let ascending=nums.sort((n1,n2)=> n1-n2)
console.log(ascending)
let des=nums.sort((n1,n2)=> n2-n1)
console.log(des)
//
// — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title:' Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

    ];
const map1=coursesAndDurationArray
.sort((a, b) => b.monthDuration - a.monthDuration)
.filter(value=>value.monthDuration > 5)
.map((value,index)=>({...value,id:index+1}))
console.log(map1)

// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
