export interface PositionProps {
  className?: string;
  position: string;
  start: Date;
  end: Date;
}

function Position({ className, position, start, end }: PositionProps) {
  return (
    <div className={className}>
      <div>{position}</div>
      <div>
        {start.getFullYear()}.{start.getMonth() + 1}
        {" ~ "}
        {end.getFullYear()}.{end.getMonth() + 1}
      </div>
    </div>
  );
}

export default Position;
