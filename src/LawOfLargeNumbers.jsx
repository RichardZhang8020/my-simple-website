import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LawOfLargeNumbers() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      // ... your chart configuration ...
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default LawOfLargeNumbers;




