import { useState } from "react";
import "./Dropdown.scss"
const Dropdown = ({options, currentOption, onChange, color, fontSize, optionColor, optionFontSize}) => {

    const[selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleSelect = (option, index) => {
        onChange(option);
        setSelectedIndex(index);
    }

    const currentOptionStyle = {
        color,
        fontSize
    }

    const optionStyle = {
        color: optionColor,
        fontSize: optionFontSize,
    }

  return (
    <div 
        className="dropdown"
        tabIndex={0} 
        onBlur={() => setOpen(false)} 
        onClick={() => setOpen((prev) => !prev)}
    >
        <div style={currentOptionStyle} className={open ? "current-option active" : "current-option"}>
            <span>{currentOption}</span>
            <div className="arrows">‣</div>
        </div>
        <div className={open ? "options active" : "options"}>
            {options.map((option, index) => (
                <div 
                    style={optionStyle}
                    onClick={() => handleSelect(option, index)}
                    className={selectedIndex == index ? "option selected" : "option"} 
                    key={index}
                >
                    <span className="selectText">{option}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dropdown;