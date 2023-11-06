export function TransactionSkeletonComponent({ bars }: { bars: number }) {
  return (
    <>
      <div role="alert" className="sr-only">
        Loading Transactions...
      </div>
      <div aria-hidden="true" className="h-40 md:h-36 flex gap-3 items-end">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            style={{
              height: `${Math.floor(Math.random() * 100)}%`,
            }}
            className="w-1/4 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
}
