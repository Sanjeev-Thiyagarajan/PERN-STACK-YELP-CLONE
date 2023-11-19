import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";

const AddCustomer = () => {
  const { addCustomers } = useContext(CustomerContext);
  const [customer_id, setCustomerId] = useState(0);
  const [sales_rep_emp_num, setSalesRepEmpNum] = useState(0);
  const [cust_first_name, setCustFirstName] = useState("");
  const [cust_last_name, setCustLastName] = useState("");
  const [cust_father_name, setCustFatherName] = useState("");
  const [cust_mother_name, setCustMotherName] = useState("");
  const [cust_spouse_name, setCustSpouseName] = useState("");
  const [cust_dob, setCustDob] = useState("");
  const [cust_gender, setCustGender] = useState("");
  const [cust_maritial_sts, setCustMaritialSts] = useState("");
  const [cust_phone, setCustPhone] = useState(0);
  const [cust_mobile, setCustMobile] = useState(0);
  const [cust_alt_mobile, setCustAltMobile] = useState(0);
  const [cust_fax, setCustFax] = useState(0);
  const [cust_email, setCustEmail] = useState("");
  const [cust_is_disable, setCustIsDisable] = useState("");
  const [cust_edu_qualification, setCustEduQualification] = useState("");
  const [cust_occupation, setCustOccupation] = useState("");
  const [cust_pan, setCustPan] = useState("");
  const [cust_aadhar, setCustAadhar] = useState(0);
  const [cust_passport, setCustPassport] = useState("");
  const [cust_reg_date, setCustRegDate] = useState("");
  const [cust_disability, setCustDisability] = useState("");
  const [cust_type_disability, setCustTypeDisability] = useState("");
  const [cust_percent_disability, setCustPercentDisability] = useState(0);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BasePath.post("/customers", {
        customer_id, sales_rep_emp_num, cust_first_name, cust_last_name,
        cust_father_name, cust_mother_name, cust_spouse_name, cust_dob,
        cust_gender, cust_maritial_sts, cust_phone, cust_mobile, cust_alt_mobile,
        cust_fax, cust_email, cust_is_disable, cust_edu_qualification, cust_occupation,
        cust_pan, cust_aadhar, cust_passport, cust_reg_date, cust_disability,
        cust_type_disability, cust_percent_disability
      });
      console.log(response.data.data);
      addCustomers(response.data.data.Customers);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <h4>Add A Customer</h4>
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={customer_id}
              onChange={(e) => setCustomerId(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Customer ID"
            />
          </div>
          <div className="col">
            <input
              value={sales_rep_emp_num}
              onChange={(e) => setSalesRepEmpNum(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Sales Rep Emp Num"
            />
          </div>
          <div className="col">
            <input
              value={cust_first_name}
              onChange={(e) => setCustFirstName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust First Name"
            />
          </div>
          {/* <div className="col">
            <select
              value={um_password}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div> */}
          <div className="col">
            <input
              value={cust_last_name}
              onChange={(e) => setCustLastName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Last Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              value={cust_mother_name}
              onChange={(e) => setCustMotherName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Mother's Name"
            />
          </div>
          <div className="col">
            <input
              value={cust_father_name}
              onChange={(e) => setCustFatherName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Father's Name"
            />
          </div>
          <div className="col">
            <input
              value={cust_spouse_name}
              onChange={(e) => setCustSpouseName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Spouse Name"
            />
          </div>
          <div className="col">
            <input
              value={cust_dob}
              onChange={(e) => setCustDob(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Date of Birth"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              value={cust_gender}
              onChange={(e) => setCustGender(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Gender"
            />
          </div>
          <div className="col">
            <input
              value={cust_maritial_sts}
              onChange={(e) => setCustMaritialSts(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Maritial Status"
            />
          </div>
          <div className="col">
            <input
              value={cust_phone}
              onChange={(e) => setCustPhone(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="col">
            <input
              value={cust_mobile}
              onChange={(e) => setCustMobile(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Mobile Number"
            />
          </div>
        </div><div className="form-row">
          <div className="col">
            <input
              value={cust_alt_mobile}
              onChange={(e) => setCustAltMobile(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Alt Mobile Number"
            />
          </div>
          <div className="col">
            <input
              value={cust_fax}
              onChange={(e) => setCustFax(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Fax Number"
            />
          </div>
          <div className="col">
            <input
              value={cust_email}
              onChange={(e) => setCustEmail(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Email"
            />
          </div>
          <div className="col">
            <input
              value={cust_is_disable}
              onChange={(e) => setCustIsDisable(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Is Disable?"
            />
          </div>
        </div><div className="form-row">
          <div className="col">
            <input
              value={cust_edu_qualification}
              onChange={(e) => setCustEduQualification(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Cust Edu Qualification"
            />
          </div>
          <div className="col">
            <input
              value={cust_occupation}
              onChange={(e) => setCustOccupation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Occupation"
            />
          </div>
          <div className="col">
            <input
              value={cust_pan}
              onChange={(e) => setCustPan(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Pan"
            />
          </div>
          <div className="col">
            <input
              value={cust_aadhar}
              onChange={(e) => setCustAadhar(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Cust Aadhar"
            />
          </div>
        </div><div className="form-row">
          <div className="col">
            <input
              value={cust_passport}
              onChange={(e) => setCustPassport(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Cust Passport"
            />
          </div>
          <div className="col">
            <input
              value={cust_reg_date}
              onChange={(e) => setCustRegDate(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Cust Reg Date"
            />
          </div>
          <div className="col">
            <input
              value={cust_disability}
              onChange={(e) => setCustDisability(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Disability"
            />
          </div>
          <div className="col">
            <input
              value={cust_type_disability}
              onChange={(e) => setCustTypeDisability(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cust Type Disability"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              value={cust_percent_disability}
              onChange={(e) => setCustPercentDisability(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Cust Percent Disability"
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
            
          >
            Add Customer
          </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddCustomer;
