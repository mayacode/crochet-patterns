import React from 'react';

export default class Content extends React.Component {
  render() {
	return (
	  <div>
		<svg version="1.1"
			 baseProfile="full"
			 width="300" height="200"
			 xmlns="http://www.w3.org/2000/svg">

		  <rect width="100%" height="100%" fill="yellow" />

		  <circle cx="150" cy="100" r="80" fill="none" stroke="red" strokeWidth="5" />

		  <text x="150" y="110" fontSize="30" textAnchor="middle" fill="black">mój text</text>

		</svg>

		<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

		  <rect x="10" y="10" width="50" height="30" stroke="black" fill="transparent" strokeWidth="5"/>
		  <rect x="80" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>

		  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" strokeWidth="5"/>
		  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" strokeWidth="5"/>

		  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" strokeWidth="5"/>
		  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
					stroke="orange" fill="transparent" strokeWidth="5"/>

		  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
				   stroke="green" fill="transparent" strokeWidth="3"/>

		  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" strokeWidth="5"/>
		</svg>
	  </div>
	);
  }
}
