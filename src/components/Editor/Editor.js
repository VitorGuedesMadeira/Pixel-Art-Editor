import React, { useState } from 'react';

// styles
import './Editor.css';

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("Start Drawing");
  const [selectedColor, setColor] = useState("#f44336");

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setDrawingPanel(!hideDrawingPanel);

    buttonText === "Start Drawing" ? setButtonText("Reset") : setButtonText("Start Drawing")

  }

  return (
    <div className="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
      <div className="options">
        <div className="option">
          <input 
            type="number" 
            className="panel-input" 
            defaultValue={panelWidth} 
            onChange={(e) => {setPanelWidth(e.target.value)}}
          />
        </div>
        <span>Width</span>

        <div className="option">
          <input 
            type="number" 
            className="panel-input" 
            defaultValue={panelHeight} 
            onChange={(e) => {setPanelHeight(e.target.value)}}
          />
        </div>
        <span>Height</span>
      </div>)}

      <button onClick={initializeDrawingPanel} className="button">{buttonText}</button>
    </div>
  )
};

export default Editor;
