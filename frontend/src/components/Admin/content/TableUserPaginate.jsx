import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const {
    listUsers,
    handleClickBtnUpdate,
    handleClickBtnView,
    handleClickBtnDelete,
    fetchListUserWithPaginate,
    pageCount,
    nativePage,
    setNativePage,
  } = props;
  const [itemOffset, setItemOffset] = useState(0);
  // const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
    fetchListUserWithPaginate(+event.selected + 1);
    setNativePage(+event.selected + 1);
  };

  return (
    <>
      <table className="table table table-hover table-bordered align-middle ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User-Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        handleClickBtnView(user);
                      }}
                    >
                      {" "}
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        handleClickBtnUpdate(user);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleClickBtnDelete(user);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })) || (
            <tr>
              <td className="text-center" colSpan={4}>
                not found data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ReactPaginate
        // breakLabel="..."
        // nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        // pageCount={5}
        // previousLabel="< previous"
        // renderOnZeroPageCount={null}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        forcePage={nativePage - 1}
      />
    </>
  );
};

export default TableUserPaginate;
