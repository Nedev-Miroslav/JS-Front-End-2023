function createGreeting(greetingText){ // Това е функцията която ще създава други функции
    function greet(name){ // Tази функция ще използва текста подаден на Parent функцията
        return greetingText + " " + name;
    }

    return greet; // Връщаме вътрешната функция навън;
}

const morningGreeting = createGreeting("Good morning"); // Тук изпълняваме финкцията greet извън контекста на нейната Parent функцият, но тъй като я извикваме на същото ниво като Parent функцията тя все още може да достъпва параметрите на Parenta си (запомня своя scope).

const eventingGreeting = createGreeting("Good evening"); // Можем да създадем различни поздрави на който да подадем име.

console.log(morningGreeting("Miro"));
