import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

function StatePopulation() {

  return (
    <div>
      <h1>US Population Map</h1>
      <svg width="900" height="600" />
    </div>
  );
}

export default StatePopulation;