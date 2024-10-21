# goit-js-hw-04

## Struktura projektu
Projekt składa się z następujących plików i folderów:
- `/js`
  - `task-1.js` - Rozwiązanie zadania 1: Packing Goods
  - `task-2.js` - Rozwiązanie zadania 2: Calorie Calculation
  - `task-3.js` - Rozwiązanie zadania 3: Player Profile
- `.gitignore` - Plik ignorujący niepotrzebne pliki w repozytorium
- `.prettierrc` - Plik konfiguracyjny dla Prettier
- `index.html` - Strona główna projektu, wyświetlająca wyniki zadań w przeglądarce
- `README.md` - Dokumentacja projektu

## Opis zadań

### Task 1: Packing Goods
Celem tego zadania jest stworzenie funkcji `isEnoughCapacity(products, containerSize)`, która oblicza, czy wszystkie produkty zmieszczą się w pojemniku. Funkcja przyjmuje dwa parametry:
- `products` – obiekt, w którym klucze to nazwy produktów, a wartości to ich ilości.
- `containerSize` – liczba, która oznacza maksymalną pojemność kontenera.

Funkcja zwraca `true`, jeśli wszystkie produkty zmieszczą się w pojemniku, w przeciwnym razie `false`. Wyniki są wyświetlane w sekcji "Task 1 Results" w pliku `index.html`.

### Task 2: Calorie Calculation
Zadanie polega na stworzeniu funkcji `calcAverageCalories(days)`, która oblicza średnią dzienną liczbę spożytych kalorii na podstawie tablicy obiektów reprezentujących dni tygodnia i ilość spożytych kalorii. Wyniki są wyświetlane w sekcji "Task 2 Results" w pliku `index.html`.

### Task 3: Player Profile
Zadanie polega na stworzeniu obiektu `profile`, który przechowuje informacje o użytkowniku w grze (nazwa użytkownika i czas gry). Obiekt ten ma metody pozwalające na aktualizację nazwy użytkownika oraz czasu gry. Wyniki są wyświetlane w sekcji "Task 3 Results" w pliku `index.html`.

## Wymagania
- Kod musi być sformatowany za pomocą Prettier.
- Nie mogą występować żadne błędy ani ostrzeżenia w konsoli po uruchomieniu zadań.
- Taski 1, 2 i 3 muszą zostać wykonane i poprawnie wyświetlać wyniki w odpowiednich sekcjach strony `index.html`.

## Wyświetlanie wyników
Wyniki zadań są automatycznie wyświetlane w przeglądarce w odpowiednich sekcjach pliku `index.html`:
- Wyniki zadania 1 są wyświetlane w sekcji `#task-1-results`.
- Wyniki zadania 2 są wyświetlane w sekcji `#task-2-results`.
- Wyniki zadania 3 są wyświetlane w sekcji `#task-3-results`.

## Sformatowanie kodu za pomocą Prettier:

* Aby użyć Prettier, musisz zainstalować go w swoim projekcie. Można to zrobić, jeśli masz zainstalowany Node.js, za pomocą polecenia:
  
```bash
npm install --save-dev prettier
```

* Następnie możesz uruchomić Prettier na swoim kodzie za pomocą:

```bash
npx prettier --write .
```

To polecenie sformatuje wszystkie pliki w projekcie.
