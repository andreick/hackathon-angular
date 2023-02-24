export function getYesterday(date: Date): Date {
  const yesterday = new Date(date)
  yesterday.setDate(date.getDate() - 1)
  return yesterday
}
