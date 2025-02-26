export function formatDate(date: Date, format = "YYYY.MM") {
  function appendZero(str: string) {
    return str.length === 1 ? `0${str}` : str;
  }

  const formatted = format.replace(/(YYYY|YY|MM|dd)/gi, function (target) {
    switch (target) {
      case "YYYY": {
        return date.getFullYear().toString();
      }
      case "YY": {
        return appendZero((date.getFullYear() % 1000).toString());
      }
      case "MM": {
        return appendZero((date.getMonth() + 1).toString());
      }
      case "dd": {
        return appendZero(date.getDate().toString());
      }
      default: {
        return target;
      }
    }
  });

  return formatted;
}

export function displayPeriod(
  start: Date,
  end?: Date,
  options?: {
    dateFormat?: string;
    separator?: string;
    onGoingText?: string;
  }
) {
  const dateFormat = options?.dateFormat ?? "YYYY.MM";
  const separator = options?.separator ?? " ~ ";
  const onGoingText = options?.onGoingText ?? "Now";

  const startDate = formatDate(start, dateFormat);
  const endDate = end ? formatDate(end, dateFormat) : onGoingText;

  return `${startDate}${separator}${endDate}`;
}
