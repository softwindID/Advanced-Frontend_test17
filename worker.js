import {Person} from './person.js'
export class Worker extends Person {
    constructor(firstName, lastName, _birthday, position) {
        super(firstName, lastName, _birthday);
        this.position = position;
        this._rate = 1000;
        this._days = 0;
    }


    get rate() {
        return this._rate;
    }
    set rate(value) {
     if (value >= 1000) {
         this._rate = value;
     }else {
         console.log('Error');
     }
    }

    addDays(days) {
        function daysInCurrentMonth() {
            const month = (new Date()).getMonth() + 1;
            const year = (new Date()).getFullYear();
            return new Date(year, month, 0).getDate();
        }

        if (days > 0) {
            this._days += days;
            if (this._days > daysInCurrentMonth()) {
                this._days -= days;
                console.log('Error: Количесство отработанных дней больше чем количество дней в текущем месяце!')
            }
        } else  {
            console.log('Error: Количество отработанных дней должно быть хотя бы 1!')
        }
    }
    getSalary() {
       let salary = this._rate * this._days

        let today = new Date();
        let birthDate = this._birthday;
        let monthDiff = today.getMonth() - birthDate.getMonth() ;

        if (monthDiff === 0) {
            salary = salary * 1.1;
        }
           return salary;

    }

   static whoWorkedMore(workers) {
       function daysInCurrentMonth() {
           const month = (new Date()).getMonth() + 1;
           const year = (new Date()).getFullYear();
           return new Date(year, month, 0).getDate();
       }
       let workersWithMaxDays = [];
       let maxDays = 0;
        console.log(workers[0].getAge());

       workers.forEach(worker => {
           if (worker._days > daysInCurrentMonth()) {
               console.log('Error!' + worker.getFullName() + ' отработал больше дней (' + worker._days + ') чем в текущем месяце (' + daysInCurrentMonth());
               return;
           }
           if (worker._days > maxDays) {
               maxDays = worker._days;
               workersWithMaxDays = [worker];
           } else if (worker._days === maxDays) {
               workersWithMaxDays.push(worker);
           }
       });


       if (workersWithMaxDays.length === 1) {
           console.log("Больше всех отработал " + workersWithMaxDays[0].getFullName() + ". Количество рабочих дней - " + " " + maxDays);
       } else if (workersWithMaxDays.length > 1 ) {

           console.log("Несколько работников отработали одинаковое количество дней: ")
           workersWithMaxDays.forEach(worker => {
               console.log(worker.getFullName() + " " + maxDays);
           });
       } else {
           console.log('Нет данных о работниках');
       }
   }

    static whoIsYounger(workers) {
          if (workers.length === 0) {
                console.log('Нет данных о работниках');
                return;
            }

          workers.sort((a, b) => {
                return parseInt(a.getAge()) - parseInt(b.getAge());
            });

          let minAge = parseInt(workers[0].getAge());

          let youngestWorkers = workers.filter(worker => parseInt(worker.getAge()) === minAge);
        if ( youngestWorkers .length === 1) {
            console.log("Самый младший работник " +  youngestWorkers[0].getFullName() + ' ' +  youngestWorkers[0].getAge());
        } else if (youngestWorkers.length > 1) {

            youngestWorkers.forEach(worker => {
                console.log("Несколько работников самые младшие " + worker.getFullName() + ' ' + worker.getAge());
            });
        } else {
            console.log('Нет данных о работниках');
        }
    }


    }

