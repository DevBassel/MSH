interface BtnProp {
  className?: string;
  text?: string;
  fun?(): void;
}

export default function Button({ className, fun, text }: BtnProp) {
  return (
    <button
      onClick={() => fun && fun()}
      className={` rounded-2xl py-3 cursor-pointer capitalize px-4 font-extrabold tracking-wider ${className}`}
    >
      {text || ""}
    </button>
  );
}
