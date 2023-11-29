import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { UserMasterContext } from "../../context/UserMasterContext";
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import { VolunteerContext } from "../../context/VolunteerContext";
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
  const { volunteers, setVolunteers } = useContext(VolunteerContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/userMasters/volunteer");
        console.log(response.data.data);
        setVolunteers(response.data.data.Volunteers);
      } catch (err) {}
    };

    fetchData();
  }, [setVolunteers]);

  const handleDelete = async (e, vol_id) => {
    e.stopPropagation();
    try {
      // const response = 
      await BasePath.delete(`/volunteer/${vol_id}`);
      setVolunteers(
        volunteers.filter((volunteer) => {
          return volunteer.vol_id !== vol_id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, vol_id) => {
    e.stopPropagation();
    history.push(`/volunteers/${vol_id}/update`);
  };

  const handleVolunteerSelect = (vol_id) => {
    history.push(`/volunteers/${vol_id}`);
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
      Volunteer List
    </h4>
    <div className="table-responsive">
      <table
      id="VolunteersTable" className="table table-sm table-striped table-hover table-bordered table-condensed"
      cellSpacing="0"
      width="100%"
      >
        <thead className =" thead-dark">
          <tr className="bg-primary">
            <th scope="col">Volunteer ID</th>
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
          {volunteers &&
            volunteers.map((volunteer) => {
              return (
                <tr>
                  <td
                  onClick={() => handleVolunteerSelect(volunteers.vol_id)}
                  key={volunteer.vol_id}
                  style={{
                    // position: "absolute"
                    // marginRi
                  }}
                  >{volunteer.vol_id}
                  </td>
                  <td>{volunteer.um_login_id}</td>
                  <td>{volunteer.um_password}</td>
                  <td>{volunteer.um_role}</td>
                  <td>{volunteer.um_name}</td>
                  <td>{volunteer.um_address}</td>
                  <td>{volunteer.um_email}</td>
                  <td>{volunteer.um_unique_id}</td>
                  <td>{volunteer.um_id_type}</td>
                  <td>{volunteer.um_dept}</td>
                  <td>{volunteer.um_login_sts}</td>
                  <td>{volunteer.um_created_time}</td>
                  <td>{volunteer.um_last_login}</td>
                  <td>{volunteer.um_ln_attempts}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, volunteer.vol_id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, volunteer.vol_id)}
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
