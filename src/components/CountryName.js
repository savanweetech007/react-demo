import country from './country'

var code = prompt("Enter Country Code : ")
function countryName() {
    let name = ''
for (const countries of country) {
        if(countries.code === code.toUpperCase()){
            name = countries.name
        }
    }
   return ( 
        <>
        <h1>Country : </h1>
        <h1>{name}</h1>
        </>
     );
}

export default countryName;