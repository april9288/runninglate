import React from 'react'
import './Situation.css';

import accident from '../photos/accident.jpg';
import broken from '../photos/broken.jpg';
import traffic from '../photos/traffic.jpg';
import weather from '../photos/weather.jpg';

const Situation = ({getSituation}) => {
	return (
		<section>
		<h1 style={{color:"white"}}>Choose your situation</h1>
			<div className="Situation-List">

				<button onClick={()=>getSituation("traffic")}>
					<img alt="situation3" src={traffic} />
					<h4>Stuck in traffic</h4>
				</button>

				<button onClick={()=>getSituation("accident")}>
					<img alt="situation1" src={accident} />
					<h4>Got accident</h4>
				</button>

				<button onClick={()=>getSituation("broken")}>
					<img alt="situation2" src={broken} />
					<h4>Car broken</h4>
				</button>

				<button onClick={()=>getSituation("weather")}>
					<img alt="situation4" src={weather} />
					<h4>Bad weather</h4>
				</button>

		 	 </div>
		</section>
		)
}

export default Situation;

