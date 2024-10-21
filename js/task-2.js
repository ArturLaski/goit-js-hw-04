function calcAverageCalories(days) {
  let average = 0;
  let sum = 0; 
  for (let day of days) {
      sum += day.calories;
      average = sum / days.length;
  }
  return average;
}

const task2ResultsDiv = document.getElementById('task-2-results');

const days1 = [
  { day: 'monday', calories: 3010 },
  { day: 'tuesday', calories: 3200 },
  { day: 'wednesday', calories: 3120 },
  { day: 'thursday', calories: 2900 },
  { day: 'friday', calories: 3450 },
  { day: 'saturday', calories: 3280 },
  { day: 'sunday', calories: 3300 }
];

const days2 = [
  { day: 'monday', calories: 2040 },
  { day: 'tuesday', calories: 2270 },
  { day: 'wednesday', calories: 2420 },
  { day: 'thursday', calories: 1900 },
  { day: 'friday', calories: 2370 },
  { day: 'saturday', calories: 2280 },
  { day: 'sunday', calories: 2610 }
];

const result1 = calcAverageCalories(days1); // 3180
const result2 = calcAverageCalories(days2); // 2270
const result3 = calcAverageCalories([]);    // 0

task2ResultsDiv.innerHTML += `<p>Average calories for days1: ${result1}</p>`;
task2ResultsDiv.innerHTML += `<p>Average calories for days2: ${result2}</p>`;
task2ResultsDiv.innerHTML += `<p>Average calories for empty list: ${result3}</p>`;
