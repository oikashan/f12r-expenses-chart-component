export type Transaction = {
  day: string;
  amount: number;
};

export function TransactionComponent({
  day,
  amount,
  percentage,
}: Transaction & {
  percentage: number;
}) {
  return (
    <button
      aria-readonly="true"
      aria-label="Transacted Amount Per Day"
      className="transaction relative inline-flex flex-col gap-2 items-center justify-end w-full mt-6"
    >
      {/* Amount */}
      <span aria-label="Amount" className="sr-only">
        ${amount}
      </span>
      {/* Bar */}
      <span
        aria-hidden="true"
        data-amount={`$${amount}`}
        className={`bar relative w-full h-36 md:h-28 flex flex-col justify-end ${
          percentage == 100 ? "bar-largest" : ""
        }`}
        style={{
          // Initially, the height is 5% so it animates later in.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--height": `5%`,
        }}
      ></span>
      {/* Day */}
      <span aria-label="Day" className="w-full text-gray-500 text-[.65rem]">
        {day}
      </span>
    </button>
  );
}
