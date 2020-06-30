
const axios = require('axios');


const getClima = async( lat, lon ) =>{
	
	const resp  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f7e825fed5fedf0556aedb13b94cae2&units=metric`);
	
	return resp.data.main.temp;	
}

module.exports = {
	getClima
}
