import React, { useState } from "react";
import { SketchPicker } from "react-color";

interface ButtonColorProps {
  onChange: any;
  colorPicker: string;
  className?: string;
}

const ButtonColor = ({
  onChange,
  colorPicker,
  className,
}: ButtonColorProps) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <div
        className="p-[5px] bg-white rounded-lg inline-block cursor-pointer border-2 mx-[5px]"
        onClick={handleClick}
      >
        <div
          style={{ background: `${colorPicker}` }}
          className={`w-[40px] h-[20px] rounded-[2px]`}
        ></div>
      </div>
      {displayColorPicker ? (
        <div
          className={`absolute z-20 top-0 ${className ? className : "right-0"}`}
        >
          <div
            className="fixed top-0 right-0 left-0 bottom-0"
            onClick={handleClose}
          />
          <SketchPicker color={colorPicker} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
};

export default ButtonColor;
