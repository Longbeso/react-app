const TableUser = (props) => {
  const { listUsers, handleClickBtnUpdate } = props;

  // componentDidMount

  // hàm được chạy sau khi DOM được render
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
                    <button className="btn btn-secondary"> View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        handleClickBtnUpdate(user);
                        s;
                      }}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger">Delete</button>
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
    </>
  );
};

export default TableUser;
