interface SliderProps {
  title: string;
  min?: string;
  max?: string;
  value: number;
  onChange: any;
}

const Slider = ({
  title,
  min = "-50",
  max = "50",
  value,
  onChange,
}: SliderProps) => {
  return (
    <div className="mb-5">
      <p className="pb-[10px]">{title}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="w-full"
        onChange={onChange}
      />
      <p className="text-sm">Value: {value}</p>
    </div>
  );
};

export default Slider;
