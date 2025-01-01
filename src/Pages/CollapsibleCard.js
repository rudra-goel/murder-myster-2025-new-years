import React, { useState, useRef } from 'react';
import './CollapsibleCard.css';

function CollapsibleCard({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const cardRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const handleChecked = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="card" ref={cardRef}>
      <div className="card-header" onClick={toggle}>
        <div className="title">
            {title}
        </div>
        <div className="space"></div>
        <div className="arrow">
            { isOpen ? "Close" : "Expand"}
        </div>
      </div>
      <div className={`card-content ${isOpen ? 'open' : ''}`}>
        <div className="card-content-title">
            {data.title}
        </div>
        <div className="card-content-description">
                <div>
                  <input  
                      type="checkbox" 
                      checked={isChecked} 
                      onClick={handleChecked} 
                      />
                 {/* &nbsp;  */}
                </div>

                {
                  data.hasBackground ? 
                  <div className="task-background"></div>
                  :
                  <></>
                }

                 <div className='task-description' onClick={() => handleChecked()}>
                  {data.description}
                 </div>

        </div>
      </div>
    </div>
  );
}

export default CollapsibleCard; 