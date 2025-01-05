import React, { useState, useEffect } from "react";

const RainPattern = () => {
  const ROWS = 15; 
  const COLS = 20; 

  const COLORS = ["#4444ff", "#7B68EE", "#9370DB"]; 

  const [grid, setGrid] = useState(
    Array(ROWS).fill(Array(COLS).fill(null)) 
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) =>
        prevGrid.map((row, rowIndex) =>
          row.map((_, colIndex) => {
            if (rowIndex === 0) {
              return Math.random() < 0.1
                ? COLORS[Math.floor(Math.random() * COLORS.length)]
                : null;
            }
            return prevGrid[rowIndex - 1][colIndex]; 
          })
        )
      );
    }, 100); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gap: "2px",
        width: "100vw", 
        height: "100vh", 
        backgroundColor: "#000", 
        margin: "0", 
      }}
    >
      {grid.flat().map((color, index) => (
        <div
          key={index}
          style={{
            width: "100%", 
            height: "100%", 
            backgroundColor: color || "#111", 
          }}
        />
      ))}
    </div>
  );
};

export default RainPattern;

