export interface RowProps {
  className?: string;
  first: React.ReactNode;
  last: React.ReactNode;
}

function Row({ className, first, last }: RowProps) {
  return (
    <div className={`flex gap-10${className ? ` ${className}` : ""}`}>
      <div className="w-60 flex justify-end">{first}</div>
      <div className="flex-1">{last}</div>
    </div>
  );
}

export default Row;
