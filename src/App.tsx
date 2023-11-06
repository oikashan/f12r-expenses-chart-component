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
  const isLargest = percentage >= 99.99;

  return (
    <button
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--height": `${percentage}%`,
      }}
      aria-label="Transacted Amount Per Day"
      className={`transaction relative inline-flex flex-col gap-2 items-center justify-end w-full h-40 ${
        isLargest ? "transaction-largest" : ""
      }`}
    >
      <span className="p-1 bg-black/80 rounded-sm text-white text-[.65rem] absolute left-1/2 -translate-x-1/2 bottom-[calc(1.75rem+var(--height))]">
        ${amount}
      </span>
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
