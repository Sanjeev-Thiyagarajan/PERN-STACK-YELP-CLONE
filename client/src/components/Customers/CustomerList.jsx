import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { useHistory } from "react-router-dom";
import { CustomerContext } from "../../context/CustomerContext";
// import StarRating from "./StarRating";

const CustomerList = (props) => {
  const { customers, setCustomers } = useContext(CustomerContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/customers");
        console.log(response.data.data);
        setCustomers(response.data.data.Customers);
        // console.log(setCustomers);
      } catch (err) {}
    };

    fetchData();
  }, [setCustomers]);
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
    Candidate List
    </h4>
    <div className="table-responsive">
      <table className="table table-sm table-striped table-hover table-bordered table-condensed "
      
      style={{
        position: "relative"
      }}>
        <thead className =" thead-dark">
          <tr className="bg-primary">
            <th scope="col">Customer ID</th>
            <th scope="col">Sales Rep Emp No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">mother Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Spouse Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Maritial Status</th>
            <th scope="col">Phone</th>
            <th scope="col">Mobile</th>
            <th scope="col">Alt Mobile</th>
            <th scope="col">Fax</th>
            <th scope="col">Email</th>
            <th scope="col">Is Disable</th>
            <th scope="col">Qualification</th>
            <th scope="col">Occupation</th>
            <th scope="col">PAN</th>
            <th scope="col">Aadhar</th>
            <th scope="col">Passport</th>
            <th scope="col">Reg Date</th>
            <th scope="col">Disability</th>
            <th scope="col">Type of Disability</th>
            <th scope="col">Percent Disability</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer) => {
              return (
                <tr>
                  <td 
                    onClick={() => handleCustomerSelect(customer.customer_id)}
                    key={customer.customer_id}
                    >{customer.customer_id}</td>
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
  );
};

export default CustomerList;
