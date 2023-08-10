import { Box } from "@mui/material"
import { useState,useEffect } from "react";
import './Breakingpoint.css'
function BreakingPoint(){
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
        <div>
      {/* <div className="glowing-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        <img className="flashlight" src="https://imgs.search.brave.com/HVXSH71Bjowg00fpwaI-lnVXTB1yCRW12bNwhx3czIs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL3Rv/cmNoXzMxOC01MzM2/MTYuanBnP3NpemU9/NjI2JmV4dD1qcGc" width={40}/>
      </div> */}
      </div>
    );
}
export default BreakingPoint