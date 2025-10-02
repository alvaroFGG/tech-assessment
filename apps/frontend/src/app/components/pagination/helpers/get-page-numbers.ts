export const getPageNumbers = (page: number, totalPages: number) => {
  const pages: (number | '...')[] = [];

  if (totalPages <= 7) {
    // si hay pocas páginas, mostramos todas
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const left = Math.max(2, page - 2);
  const right = Math.min(totalPages - 1, page + 2);

  pages.push(1); // primera

  if (left > 2) {
    pages.push('...');
  }

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < totalPages - 1) {
    pages.push('...');
  }

  pages.push(totalPages); // última

  return pages;
};
