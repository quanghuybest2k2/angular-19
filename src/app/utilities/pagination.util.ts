export class Pagination {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;

  constructor(pageSize = 10, currentPage = 1, totalItems = 0) {
    this.pageSize = pageSize;
    this.currentPage = currentPage;
    this.totalItems = totalItems;
    this.totalPages = Math.ceil(totalItems / pageSize);
  }

  setTotalItems(total: number) {
    this.totalItems = total;
    this.totalPages = Math.ceil(total / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  getEndIndex(): number {
    return Math.min(
      this.getStartIndex() + this.pageSize - 1,
      this.totalItems - 1
    );
  }
}
