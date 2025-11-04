export default function QuantityInput({ value, setValue, min = 1 }) {
  return (
    <div className="inline-flex items-center rounded-md border">
      <button
        className="px-3 py-2 text-lg"
        onClick={() => setValue((v) => Math.max(min, v - 1))}
        type="button"
      >
        –
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => setValue(Math.max(min, Number(e.target.value)))}
        className="w-14 border-x px-2 py-2 text-center focus:outline-none"
      />
      <button className="px-3 py-2 text-lg" onClick={() => setValue((v) => v + 1)} type="button">
        +
      </button>
    </div>
  );
}
