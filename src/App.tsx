import { useEffect, useMemo, useState } from "react";

type Transaction = {
  day: string;
  amount: number;
};

function TransactionComponent({
  day,
  amount,
  percentage,
}: Transaction & {
  percentage: number;
}) {
  return (
    <button
      aria-label="Transacted Amount Per Day"
      className="transaction relative inline-flex flex-col gap-2 items-center justify-end w-full mt-6"
    >
      {/* Amount */}
      <span className="sr-only">${amount}</span>
      {/* Bar */}
      <span
        aria-hidden="true"
        data-amount={`$${amount}`}
        className={`bar relative w-full h-36 md:h-28 flex flex-col justify-end ${
          percentage >= 99.99 ? "bar-largest" : ""
        }`}
        style={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--height": `${percentage}%`,
        }}
      ></span>
      {/* Day */}
      <span className="w-full text-gray-500 text-[.65rem]">{day}</span>
    </button>
  );
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  /**
   * The percentage of each transaction based on the largest.
   */
  const percentages = useMemo(() => {
    // Get the amounts from the transactions.
    const amounts = transactions.map((transaction) => transaction.amount);

    // Get the max amount.
    const max = Math.max(...amounts);

    // Using the max amount as the base, get the percentage of each amount.
    // This will be used to set the height of each transaction.
    return amounts.map((amount) => (amount / max) * 100);
  }, [transactions]);

  useEffect(() => {
    setTimeout(() => {
      (async function () {
        setTransactions(
          await fetch("/transactions.json").then((res) => res.json())
        );
      })();
    }, 3000);
  }, []);

  return transactions.length == 0 ? (
    "Loading"
  ) : (
    <div
      aria-label="Transactions List"
      className="flex items-end w-full max-w-full gap-3"
    >
      {transactions.map((transaction, i) => (
        <TransactionComponent {...transaction} percentage={percentages[i]} />
      ))}
    </div>
  );
}

export default App;
