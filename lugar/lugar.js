
const axios = require('axios');


const getLugarLatLng = async( direccion ) =>{
	
const encodedUlr = encodeURI( direccion ); 

const instance = axios.create({
  baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=MX&namePrefix=${encodedUlr}`,
  timeout: 1000,
  headers: {
	  'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
	  'X-RapidAPI-Key' : '462503267emsh20493a8c2796794p1af846jsn74abbf55d140',
	  'useQueryString' : 'true'
  }
});

const resp = await instance.get();

if ( resp.data.data.length === 0 ){
	throw `No hay resultados para ${ direccion }`;
	
}

const data = resp.data.data[0];
const dir = data.name;
const lat = data.latitude;
const lng = data.longitude;

return {
	dir,
	lat,
	lng
}	
	
}

module.exports = {
	getLugarLatLng
}
