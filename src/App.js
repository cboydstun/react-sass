
import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div>
      {/* Variable Example */}
      <h1>This is a variable example</h1>
     
     {/* Nested Rules */}
     <div className="nested">
        <h3>This is a nested rules example</h3>
     </div>

      {/* Mixin Example */}
      <div className="mixin">
      <p>This is mixin Example</p>
      </div>

     {/* Interpolation Example */}
       <p className="interpolation">Interpolation Example.</p>

       {/* Function Example */}
       <div className="function">
       <h3>This is a function example</h3>
       </div>
    </div>
  );
}