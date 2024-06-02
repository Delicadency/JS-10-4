/* Do wykonania tego zadania użyj syntaxu async/await.

Stwórz funkcję asynchroniczną o nazwie “fetchTwoResources”, w której:

wykonasz 2 zapytania fetch pod koktajlowe API przy wykorzystaniu słowa kluczowego await, który zablokuje dalsze wykonywanie kodu, na czas ładowania danych z API
pierwsze z nich, to GET po listę drinków zaczynających się na literę a: https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
następnie z pola “drinks”, które znajduje się w odpowiedzi, wyciągnij ID pierwszego drinka
kolejnym krokiem jest użycie wyciągniętego ID i wyszukanie detali wybranego drinka (zamiast 1234, na końcu adresu, po znaku “=” musisz “dokleić” prawdziwe ID) https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1234 
Ostatni krok to zwrócenie przez funkcję pobranego obiektu ze szczegółowym opisem drinka
 */

const fetchTwoResources = async () => {
    try{
    const findDrink = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const data = await findDrink.json();
    
}
    
    
    }
}