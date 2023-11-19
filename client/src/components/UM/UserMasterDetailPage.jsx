import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserMasterContext } from "../../context/UserMasterContext";
import BasePath from "../../apis/BasePath";
// import StarRating from "../components/StarRating";
// import Reviews from "../components/Reviews";
// import AddReview from "../components/AddReview";

const UserMasterDetailPage = () => {
  const { um_seq } = useParams();
  const { selectedUserMaster, setSelectedUserMaster } = useContext(
    UserMasterContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/userMasters/${um_seq}`);
        console.log(response);

        setSelectedUserMaster(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedUserMaster && (
        <>
          <h4 className="text-left display-1">
            {selectedUserMaster.User_Masters.um_name}
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                  <h5>UM Sequence : </h5>
              </div>
              <div className="col-sm">
                {selectedUserMaster.User_Masters.um_seq}
              </div>
                <div className="col-sm">
                  <h5>UM Login ID : </h5>
              </div>
              <div className="col-sm">
              {selectedUserMaster.User_Masters.um_login_id}
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                  <h5>UM Role : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_role}</div>
                <div className="col-sm">
                  <h5>UM Name : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_name}</div>
            </div>
            <div className="row">
              <div className="col-sm">
                  <h5>UM Address : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_address}</div>
                <div className="col-sm">
                  <h5>UM Email ID : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_email}</div>
            </div>
            <div className="row">
              <div className="col-sm">
                  <h5>UM Unique ID : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_unique_id}</div>
                <div className="col-sm">
                  <h5>UM Department : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_dept}</div>
            </div>
            <div className="row">
              <div className="col-sm">
                  <h5>UM Login Status : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_login_sts}</div>
                <div className="col-sm">
                  <h5>UM Created Time: </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_created_time}</div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="col"></div>
                  <h5>UM Last Login : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_last_login}</div>
                <div className="col-sm">
                  <h5>UM Ln Attempts : </h5>
              </div>
              <div className="col-sm">{selectedUserMaster.User_Masters.um_ln_attempts}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMasterDetailPage;
