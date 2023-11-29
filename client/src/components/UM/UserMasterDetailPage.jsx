import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserMasterContext } from "../../context/UserMasterContext";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";
import { VolunteerContext } from "../../context/VolunteerContext";
// import StarRating from "../components/StarRating";
// import Reviews from "../components/Reviews";
// import AddReview from "../components/AddReview";

const UserMasterDetailPage = () => {
  const { um_seq } = useParams();
  const { selectedUserMaster, setSelectedUserMaster } = useContext(
    UserMasterContext
  );
  let history = useHistory();
  const { volunteers, setVolunteers } = useContext(VolunteerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/userMasters/${um_seq}`);
        setSelectedUserMaster(response.data.data);
        console.log("User Details " +response);


        const userVolunteerDataResponse = await BasePath.get(`/userVolunteers/${um_seq}`);
        setVolunteers(userVolunteerDataResponse.data.data.userVolunteers);
        console.log("User Volunteer Data " + userVolunteerDataResponse.data.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setVolunteers]);

  //UserCustomerData Fetch
  
  // let history = useHistory();
  // useEffect(() => {
  //   const fetchData1 = async () => {
  //     try {
  //       const userCustomerDataResponse = await BasePath.get(`/userCustomers/${um_seq}`);
  //       console.log(userCustomerDataResponse.data.data);
  //       setCustomers(userCustomerDataResponse.data.data.userCustomerData);
  //       // console.log(setCustomers);
  //     } catch (err) {}
  //   };

  //   fetchData1();
  // }, [setCustomers]);
  // console.log("Outside UseEfffect : "+ setCustomers);

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

  return (
    <>

    {/* User Details */}
    <div>
      {selectedUserMaster && (
        <>
          <h4>
            {selectedUserMaster.User_Masters.um_name}'s Data
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                  <h6>UM Sequence : </h6>
              </div>
              <div className="col-lg">
                {selectedUserMaster.User_Masters.um_seq}
              </div>
                <div className="col-lg">
                  <h6>UM Login ID : </h6>
              </div>
              <div className="col-lg">
              {selectedUserMaster.User_Masters.um_login_id}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Role : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_role}</div>
                <div className="col-lg">
                  <h6>UM Name : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_name}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Address : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_address}</div>
                <div className="col-lg">
                  <h6>UM Email ID : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_email}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Unique ID : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_unique_id}</div>
                <div className="col-lg">
                  <h6>UM Department : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_dept}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Login Status : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_login_sts}</div>
                <div className="col-lg">
                  <h6>UM Created Time: </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_created_time}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="col"></div>
                  <h6>UM Last Login : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_last_login}</div>
                <div className="col-lg">
                  <h6>UM Ln Attempts : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.User_Masters.um_ln_attempts}</div>
            </div>
          </div>

          {/* User's Volunteer Data */}
          <h4>
          {selectedUserMaster.User_Masters.um_name}'s Volunteer Data
          </h4>
          <div className="table-responsive">
            <table className="table table-sm table-striped table-hover table-bordered table-condensed"
            
            style={{
              position: "relative"
            }}>
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
                      <tr
                        onClick={() => handleVolunteerSelect(volunteer.vol_id)}
                          key={volunteer.vol_id}
                      >
                        <td>{volunteer.vol_id}</td>
                        <td>{volunteer.um_seq}</td>
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
      )}
    </div>

    
    </>
  );
};

export default UserMasterDetailPage;
