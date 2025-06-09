import { ptBR } from "date-fns/locale";
import { format, parseISO } from "date-fns";

export function formatDate(date: string | null | undefined) {
  if (!date) return;

  const parsedDate = parseISO(date);

  return format(parsedDate, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
}
