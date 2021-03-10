import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: [1, 2, 3, 4, 5],
      currentPageIndex: 0,
    };
  }

  previousLinkClicked() {
    let copyCurrentPageIndex = this.state.currentPageIndex;
    if (copyCurrentPageIndex !== 0) {
      copyCurrentPageIndex = copyCurrentPageIndex - 1;
    }
    this.setState({ currentPageIndex: copyCurrentPageIndex });
  }

  nextLinkClicked() {
    let copyCurrentPageIndex = this.state.currentPageIndex;
    if (copyCurrentPageIndex !== this.state.pageNumbers.length - 1) {
      copyCurrentPageIndex = copyCurrentPageIndex + 1;
    }
    this.setState({ currentPageIndex: copyCurrentPageIndex });
  }
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            class="page-item"
            onClick={() => {
              this.previousLinkClicked();
            }}
          >
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {this.state.pageNumbers.map((pageNumber, index) => {
            return (
              <li
                className={
                  "page-item " +
                  (this.state.currentPageIndex === index ? "active" : "")
                }
                key={index}
              >
                <a className="page-link" href="#">
                  {pageNumber}
                </a>
              </li>
            );
          })}
          <li
            class="page-item"
            onClick={() => {
              this.nextLinkClicked();
            }}
          >
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
