import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
	const [busqueda, guardarBusqueda] = useState({
		ciudad: '',
		pais: ''
	});

	//* mostrar valor array al hacer submit, no mientras escribimos
	const [consultar, guardarConsultar] = useState(false)

	// eslint-disable-next-line no-unused-vars
	const { ciudad, pais } = busqueda;


	//* cuando aplicamos muestra opcion escogida
	useEffect(() => {
		//console.log(ciudad);
		const consultarAPI = async () => {
			
			http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=683cdf2642e3444cd540d39a85e18478
				
		}
		consultarAPI()
	}, [consultar]);

	return (
		<Fragment>
			<Header titulo="Clima app" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario
								busqueda={busqueda}
								guardarBusqueda={guardarBusqueda}
								guardarConsultar={guardarConsultar}
							/>
						</div>
						<div className="col m6 s12">2</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
