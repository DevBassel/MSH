interface BtnProp {
  className?: string;
  text?: string;
  fun?(): void;
}

export default function Button({ className, fun, text }: BtnProp) {
  return (
    <button
      onClick={() => fun && fun()}
      className={` rounded-2xl py-2 cursor-pointer capitalize px-2 font-extrabold ${className}`}
    >
      {text || ""}
    </button>
  );
}
