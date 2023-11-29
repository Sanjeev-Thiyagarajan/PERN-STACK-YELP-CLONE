import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { VolunteerContext } from "../../context/VolunteerContext";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";
// import StarRating from "../components/StarRating";
// import Reviews from "../ components/Reviews";
// import AddReview from "../components/AddReview";

const VolunteerDetailPage = () => {
  const { vol_id } = useParams();
  // const { um_seq } = useParams();
  const { selectedVolunteer, setSelectedVolunteer } = useContext(
    VolunteerContext
  );
  let history = useHistory();
  const { customers, setCustomers } = useContext(CustomerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/volunteer/${vol_id}`);
        setSelectedVolunteer(response.data.data);
        console.log("User Details " +response);


        const userCustomerDataResponse = await BasePath.get(`/userCustomers/${vol_id}`);
        setCustomers(userCustomerDataResponse.data.data.userCustomerData);
        console.log("User Volunteer Data " + userCustomerDataResponse.data.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setCustomers]);

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

  const handleDelete = async (e, customer_id) => {
    e.stopPropagation();
    try {
      // const response = 
      await BasePath.delete(`/customers/${customer_id}`);
      setCustomers(
        customers.filter((customer) => {
          return customer.customer_id !== customer_id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, customer_id) => {
    e.stopPropagation();
    history.push(`/customers/${customer_id}/update`);
  };

  const handleCustomerSelect = (customer_id) => {
    history.push(`/customers/${customer_id}`);
  };

  return (
    <>

    {/* User Details */}
    <div>
      {selectedVolunteer && (
        <>
          <h4>
            {selectedVolunteer.Volunteers.um_name}'s Data
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                  <h6>UM Sequence : </h6>
              </div>
              <div className="col-lg">
                {selectedVolunteer.Volunteers.um_seq}
              </div>
                <div className="col-lg">
                  <h6>UM Login ID : </h6>
              </div>
              <div className="col-lg">
              {selectedVolunteer.Volunteers.um_login_id}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Role : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_role}</div>
                <div className="col-lg">
                  <h6>UM Name : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_name}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Address : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_address}</div>
                <div className="col-lg">
                  <h6>UM Email ID : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_email}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Unique ID : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_unique_id}</div>
                <div className="col-lg">
                  <h6>UM Department : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_dept}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Login Status : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_login_sts}</div>
                <div className="col-lg">
                  <h6>UM Created Time: </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_created_time}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="col"></div>
                  <h6>UM Last Login : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_last_login}</div>
                <div className="col-lg">
                  <h6>UM Ln Attempts : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_ln_attempts}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="col"></div>
                  <h6>Volunteer Id : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_last_login}</div>
                <div className="col-lg">
                  <h6>UM Ln Attempts : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_ln_attempts}</div>
            </div>
          </div>
          

          {/* User's Customer Data */}
          <h4>
          {selectedVolunteer.Volunteers.um_name}'s Candidate Data
          </h4>
          <div className="table-responsive">
            <table className="table table-sm table-striped table-hover table-bordered table-condensed"
            
            style={{
              position: "relative"
            }}>
              <thead className =" thead-dark">
                <tr className="bg-primary">
                  <th scope="col">candidate_id</th>
                  <th scope="col">Sales Rep Emp Num</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mother's Name</th>
                  <th scope="col">Father's Name</th>
                  <th scope="col">Spouse Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Maritial Status</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Alternate Mobile</th>
                  <th scope="col">Fax</th>
                  <th scope="col">Email</th>
                  <th scope="col">is Disable</th>
                  <th scope="col">Education Qualification</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">PAN</th>
                  <th scope="col">Aadhar</th>
                  <th scope="col">Passport</th>
                  <th scope="col">Registration Date</th>
                  <th scope="col">Disability</th>
                  <th scope="col">Type Disability</th>
                  <th scope="col">Percent Disability</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {customers &&
                  customers.map((customer) => {
                    return (
                      <tr
                        onClick={() => handleCustomerSelect(customer.customer_id)}
                          key={customer.customer_id}
                      >
                        <td>{customer.customer_id}</td>
                        <td>{customer.sales_rep_emp_num}</td>
                        <td>{customer.cust_first_name}</td>
                        <td>{customer.cust_last_name}</td>
                        <td>{customer.cust_mother_name}</td>
                        <td>{customer.cust_father_name}</td>
                        <td>{customer.cust_spouse_name}</td>
                        <td>{customer.cust_dob}</td>
                        <td>{customer.cust_gender}</td>
                        <td>{customer.cust_maritial_sts}</td>
                        <td>{customer.cust_phone}</td>
                        <td>{customer.cust_mobile}</td>
                        <td>{customer.cust_alt_mobile}</td>
                        <td>{customer.cust_fax}</td>
                        <td>{customer.cust_email}</td>
                        <td>{customer.cust_is_disable}</td>
                        <td>{customer.cust_edu_qualification}</td>
                        <td>{customer.cust_occupation}</td>
                        <td>{customer.cust_pan}</td>
                        <td>{customer.cust_aadhar}</td>
                        <td>{customer.cust_passport}</td>
                        <td>{customer.cust_reg_date}</td>
                        <td>{customer.cust_disability}</td>
                        <td>{customer.cust_type_disability}</td>
                        <td>{customer.cust_percent_disability}</td>
                        
                        <td>
                          <button
                            onClick={(e) => handleUpdate(e, customer.customer_id)}
                            className="btn btn-warning"
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={(e) => handleDelete(e, customer.customer_id)}
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

export default VolunteerDetailPage;
