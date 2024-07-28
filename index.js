import  { Worker } from "./worker.js";

const workersData = [
    { firstName: "Иван", lastName: "Иванов", birthday: "01-15-1990", position: "Инженер", rate: 1200 },
    { firstName: "Петр", lastName: "Петров", birthday: "02-20-1995", position: "Программист", rate: 1100 },
    { firstName: "Мария", lastName: "Сидорова", birthday: "03-25-1988", position: "Дизайнер", rate: 1000 },
    { firstName: "Анна", lastName: "Ковалева", birthday: "04-10-1992", position: "Тестировщик", rate: 1050 },
    { firstName: "Дмитрий", lastName: "Смирнов", birthday: "05-05-1998", position: "Аналитик", rate: 1300 }
];

let workers = [
    new Worker(workersData[0].firstName, workersData[0].lastName, workersData[0].birthday, workersData[0].position),
    new Worker(workersData[1].firstName, workersData[1].lastName, workersData[1].birthday, workersData[1].position),
    new Worker(workersData[2].firstName, workersData[2].lastName, workersData[2].birthday, workersData[2].position),
    new Worker(workersData[3].firstName, workersData[3].lastName, workersData[3].birthday, workersData[3].position),
    new Worker(workersData[4].firstName, workersData[4].lastName, workersData[4].birthday, workersData[4].position)
];


workers[0].rate = 1500;
workers[1].rate = 1700;
workers[2].rate = 1600;
workers[0].addDays(4);
workers[0].addDays(-2);
workers[1].addDays(4);
workers[1].addDays(50);
workers[2].addDays(4);
workers[3].addDays(4);
workers[3].addDays(4);
workers[4].addDays(4);;



console.log(workers[0].getFullName() + ' ' + workers[0].getSalary());
console.log(workers[1].getFullName() + ' ' + workers[1].getSalary());

workers.forEach(worker => {
    console.log(worker.getFullName() + ' ' + worker.getSalary());
});


Worker.whoWorkedMore(workers);
Worker.whoIsYounger(workers);
