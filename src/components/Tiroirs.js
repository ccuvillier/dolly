import React, {useState, useRef} from 'react';
import "./Tiroirs.scss";

function Tiroirs(props){

  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleTiroir() {
    setActiveState(setActive === "" ? "open" : "");
    setHeightState(setActive === "open" ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="tiroir_section" aria-expanded={setActive}>
      <div className="poigneeTiroirs">
        <button className={setActive} onClick={toggleTiroir}>{props.title}</button>
      </div>
      <div ref={content} style={{maxHeight: `${setHeight}`}} className="contenu">
        <div dangerouslySetInnerHTML={{__html: props.content}} />
      </div>
    </div>
  )
}

export default Tiroirs;