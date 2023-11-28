import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { UserMasterContext } from "../../context/UserMasterContext";
import { useHistory } from "react-router-dom";
// import $ from 'jquery';
// import StarRating from "./StarRating";

// $(document).ready(function () {
//   //Pagination numbers
//   $('#UserMastersTable').DataTable({
//     "pagingType": "numbers"
//   });
// });
// $(function () {
//   $('#UserMastersTable').DataTable();
//   $('.dataTables_length').addClass('bs-select');
// });


const VolunteerList = (props) => {
  const { userMasters, setUserMasters } = useContext(UserMasterContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/userMasters");
        console.log(response.data.data);
        setUserMasters(response.data.data.User_Masters);
      } catch (err) {}
    };

    fetchData();
  }, [setUserMasters]);

  const handleDelete = async (e, um_seq) => {
    e.stopPropagation();
    try {
      // const response = 
      await BasePath.delete(`/userMasters/${um_seq}`);
      setUserMasters(
        userMasters.filter((userMaster) => {
          return userMaster.um_seq !== um_seq;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, um_seq) => {
    e.stopPropagation();
    history.push(`/userMasters/${um_seq}/update`);
  };

  const handleUserMasterSelect = (um_seq) => {
    history.push(`/userMasters/${um_seq}`);
  };

  // const renderRating = (userMaster) => {
  //   if (!restaurant.count) {
  //     return <span className="text-warning">0 reviews</span>;
  //   }
  //   return (
  //     <>
  //       <StarRating rating={restaurant.id} />
  //       <span className="text-warning ml-1">({restaurant.count})</span>
  //     </>
  //   );
  // };

  return (
    <>
    <h4>
      User List
    </h4>
    <div className="table-responsive">
      <table
      id="UserMastersTable" className="table table-sm table-striped table-hover table-bordered table-condensed"
      cellSpacing="0"
      width="100%"
      >
        <thead className =" thead-dark">
          <tr className="bg-primary">
            <th scope="col">UM SEQ</th>
            <th scope="col">Login Id</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Unique ID</th>
            <th scope="col">ID Type</th>
            <th scope="col">Department</th>
            <th scope="col">Login Sts</th>
            <th scope="col">Created Time</th>
            <th scope="col">last Login</th>
            <th scope="col">Ln Attempts</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
          {userMasters &&
            userMasters.map((userMaster) => {
              return (
                <tr>
                  <td
                  onClick={() => handleUserMasterSelect(userMaster.um_seq)}
                  key={userMaster.um_seq}
                  style={{
                    // position: "absolute"
                    // marginRi
                  }}
                  >{userMaster.um_seq}
                  </td>
                  <td>{userMaster.um_login_id}</td>
                  <td>{userMaster.um_password}</td>
                  <td>{userMaster.um_role}</td>
                  <td>{userMaster.um_name}</td>
                  <td>{userMaster.um_address}</td>
                  <td>{userMaster.um_email}</td>
                  <td>{userMaster.um_unique_id}</td>
                  <td>{userMaster.um_id_type}</td>
                  <td>{userMaster.um_dept}</td>
                  <td>{userMaster.um_login_sts}</td>
                  <td>{userMaster.um_created_time}</td>
                  <td>{userMaster.um_last_login}</td>
                  <td>{userMaster.um_ln_attempts}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, userMaster.um_seq)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, userMaster.um_seq)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default VolunteerList;
