import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";
// import StarRating from "../components/StarRating";
// import Reviews from "../components/Reviews";
// import AddReview from "../components/AddReview";

const CustomerDetailPage = () => {
  const { customer_id } = useParams();
  const { selectedCustomer, setSelectedCustomer } = useContext(
    CustomerContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/customers/${customer_id}`);
        console.log(response);
        
        setSelectedCustomer(response.data.data);
        } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedCustomer && (
        <>
          <h4>
            Customer Details
          </h4>
          <div className="container">
          <div className="row">
              <div className="col-lg">
                  <h6>Candidate ID : </h6>
              </div>
              <div className="col-lg">
                <label></label>
                {selectedCustomer.Customers.customer_id}
              </div>
                <div className="col-lg">
                  <h6>Sales Rep Employee Number : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.sales_rep_emp_num}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Customer First Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_first_name}
              </div>
                <div className="col-lg">
                  <h6>Customer Last Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_last_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mother's Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_mother_name}
              </div>
                <div className="col-lg">
                  <h6>Father's Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.sales_rep_emp_num}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Spouse Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_spouse_name}
              </div>
                <div className="col-lg">
                  <h6>DOB :  </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_dob}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_gender}
              </div>
                <div className="col-lg">
                  <h6>Maritial Status: </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_maritial_sts}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Customer Phone : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_phone}
              </div>
                <div className="col-lg">
                  <h6>Phone : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_phone}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mobile Number : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_mobile}
              </div>
                <div className="col-lg">
                  <h6>Alternate Mobile Number : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_alt_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Fax : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_fax}
              </div>
                <div className="col-lg">
                  <h6>Email ID : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_email}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Is Disable : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_is_disable}
              </div>
                <div className="col-lg">
                  <h6>Education Qualification : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_edu_qualification}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_occupation}
              </div>
                <div className="col-lg">
                  <h6>Pan : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_pan}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Aadhar : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_aadhar}
              </div>
                <div className="col-lg">
                  <h6>Passport : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_passport}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Registration Date : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_reg_date}
              </div>
                <div className="col-lg">
                  <h6>Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_disability}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Type  Disability : </h6>
              </div>
              <div className="col-lg">
                {selectedCustomer.Customers.cust_type_disability}
              </div>
                <div className="col-lg">
                  <h6>Percent Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCustomer.Customers.cust_percent_disability}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerDetailPage;
