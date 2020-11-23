export const getTime = (date: string) => new Date(date).getTime();

export const sortByDate = <T extends { last_updated: string }>(
  arr: T[],
  sortOrder: 'asc' | 'desc',
): T[] =>
  sortOrder === 'asc'
    ? arr.sort((a, b) => getTime(a.last_updated) - getTime(b.last_updated))
    : arr.sort((a, b) => getTime(b.last_updated) - getTime(a.last_updated));
