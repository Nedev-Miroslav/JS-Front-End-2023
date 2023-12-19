function createCats(input){
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {  // тук може да подадем с arrow функция meow = () => това ще ни даде възможност да присвояваме стойността от метода на променлива. Това е така защото arrow function няма контекст на this и отива едно ниво нагоре и взема this oт класът
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    input.forEach((line) => {
        const [name, age] = line.split(" ");
        const cat = new Cat(name, age);
        cat.meow(); // Ако сме използвали arrow функция по-горе тук ще можем да запишем резултата на променлива const greet = cat.meow; и след това да изпълним greet() без проблеми. Ако горе е без arrow функция това тук ще върне undefine
    });

}


createCats(['Mellow 2', 'Tom 5']);