import {
  format,
  parseISO,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";
import { AdditionalInfo } from "../styles";

const getPlural = (number, word) =>
  `${number} ${word}${number > 1 ? "s" : ""} ago`;

const formatDate = (dateString) => {
  const now = new Date();
  const date = parseISO(dateString);
  const diffMinutes = Math.ceil(differenceInMinutes(now, date));
  const diffHours = Math.ceil(differenceInHours(now, date));
  const diffDays = Math.ceil(differenceInDays(now, date));

  if (diffMinutes < 60) {
    return <AdditionalInfo>{getPlural(diffMinutes, "minute")}</AdditionalInfo>;
  } else if (diffHours < 24) {
    return <AdditionalInfo>{getPlural(diffHours, "hour")}</AdditionalInfo>;
  } else if (diffDays < 7) {
    return <AdditionalInfo>{getPlural(diffDays, "day")}</AdditionalInfo>;
  } else {
    return <AdditionalInfo>{format(date, "dd.MM.yyyy")}</AdditionalInfo>;
  }
};

export default formatDate;
