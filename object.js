const property = {
  name: 'heai heai',
  agg: 20,
  pesha: 'chor',
  sing: 'gan'
}
console.log(typeof (property.agg));
const keys = Object.keys(property)
//[ 'name', 'agg', 'pesha', 'sing' ]
console.log(keys);
const value = Object.values(property)
console.log(value);

delete property.agg
console.log(property);