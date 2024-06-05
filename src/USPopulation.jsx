import React, { useState, useEffect } from 'react';
import axios from 'axios';

function USPopulation() {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.census.gov/data/2021/pep/population?get=NAME,POP_2021&for=us:*&key=ab36e0bc50ed94790e99457833ec33d6cec2fe85'
        );
        setPopulationData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!populationData) {
    return <div>Loading...</div>;
  }

  const country = populationData[1][0];
  const population = populationData[1][1];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '2rem' }}>
        <div>
        <h1>Real Time US Population:</h1>
        <div>
            <h2>{country}</h2>
            <p>{population}</p>
        </div>
        </div>
    </div>
  );
}

export default USPopulation;