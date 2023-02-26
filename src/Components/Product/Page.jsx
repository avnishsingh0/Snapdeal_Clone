function Page({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange("prev")}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange("next")}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Page;
