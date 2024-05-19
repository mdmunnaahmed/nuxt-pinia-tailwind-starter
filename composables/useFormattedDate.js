// useFormattedDate.js
import { ref } from 'vue';
import { format } from 'date-fns';

export function useFormattedDate() {
  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, "h:mma 'at' dd MMM yyyy");
  };

  return {
    formattedDate,
  };
}
