

function calculateValues(allWorkouts) {
 
const allCats = [];

// alle Kategorien aus allen Workouts raussuchen und für jede Kategorie in allCats ein
// Object speichern, mit einem Value von 1

allWorkouts.map((workout)=> {
  const thisCats = workout.Workout.categories;
  thisCats.forEach((cat)=> allCats.push({name: cat, value: 1}))  
});

// Über allCats mappen und für jede Kategorie zählen, wie viele Objects mit dem Namen im Array
// sind und den Value entsprechen hochsetzen

const allCatsWithValues = allCats.map((cat)=> {
    const filtered = allCats.filter((obj)=> obj.name===cat.name);
    return ({name: cat.name, value: filtered.length})  
})

// aus allCatsWithValues alles Duplikate entfernen: 
// Mit findIndex sucht man von dem aktuellen Object den index raus, wo das Object mit dem Namen 
// das erste Mal im Array auftaucht
// Mit der filter-Method returned man dann nur die Objects wo der index dem ersten mit dem Namen
// entspricht, der Rest entfällt

  const data = allCatsWithValues.filter((value, index, array) => {
  return (index === (array.findIndex((t) => t.name === value.name)))  
  })

  return (data);

    }

    export default calculateValues;