import { displayPeriod } from "@/utils/formatDate";

export interface PositionProps {
  className?: string;
  position: string;
  start: Date;
  end?: Date;
}

function Position({ className, position, start, end }: PositionProps) {
  return (
    <div className={className}>
      <div>{position}</div>
      <div>{displayPeriod(start, end)}</div>
    </div>
  );
}

export default Position;
