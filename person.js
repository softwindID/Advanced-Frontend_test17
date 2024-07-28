export class Person {


    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._birthday = new Date(birthday);;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get birthday() {
        let day = this._birthday.getDate();
        let month = this._birthday.getMonth() + 1;
        let year = this._birthday.getFullYear();

        return day + '-' + month + '-' + year;

    }

    getAge() {
        let today = new Date();
        let birthDate = this._birthday;
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth() + 1;

        if (monthDiff < 0) {
            age--;
        }else if (monthDiff === 0 && today.getDate() < birthDate.getDate()) {
            age--;
        }
        let lastDigit = age % 10;
        let ageStr;


        if (lastDigit === 1 && age !== 11) {
            ageStr = age + ' год';
        } else if ([2, 3, 4].includes(lastDigit) && !(age >= 12 && age <= 14)) {
            ageStr = age + ' года';
        } else {
            ageStr = age + ' лет';
        }
        return ageStr;
   }

}

    let array = [
        ['Lena', 'Mutu', '07-11-2021'],
        ['Ivan', 'Grebenets', '09-07-1980'],
        ['Ira', 'Ivanova', '04-28-1978'],

    ];
let persons = [];

array.forEach(item => {
    let person = new Person(item[0], item[1], item[2]);
    persons.push(person);
});

persons.forEach(person => {
    console.log(person.getFullName());
    console.log(person._birthday);
    console.log(person.getAge());
});
