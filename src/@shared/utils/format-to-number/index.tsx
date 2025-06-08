export function formatToNumber(bigNumber: number | null | undefined): string {
  if (!bigNumber) return "";

  return new Intl.NumberFormat("pt-BR").format(bigNumber);
}
