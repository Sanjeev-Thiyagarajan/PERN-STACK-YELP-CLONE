import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { CustomerContext } from "../../context/CustomerContext";

const AddCustomer = () => {
  const { addCustomers } = useContext(CustomerContext);
  const [customerData, setCustomerData] = useState({
    customer_id: 0,
    sales_rep_emp_num: 0,
    cust_first_name: "",
    cust_last_name: "",
    cust_father_name: "",
    cust_mother_name: "",
    cust_spouse_name: "",
    cust_dob: "",
    cust_gender: "",
    cust_maritial_sts: "",
    cust_phone: 0,
    cust_mobile: 0,
    cust_alt_mobile: 0,
    cust_fax: 0,
    cust_email: "",
    cust_is_disable: "",
    cust_edu_qualification: "",
    cust_occupation: "",
    cust_pan: "",
    cust_aadhar: 0,
    cust_passport: "",
    cust_reg_date: "",
    cust_disability: "",
    cust_type_disability: "",
    cust_percent_disability: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BasePath.post("/customers", customerData);
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
            {/* Field 1 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="customer_id">Customer ID<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="customer_id"
                name="customer_id"
                value={customerData.customer_id || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 2 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="sales_rep_emp_num">Sales Rep. Emp Num<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="sales_rep_emp_num"
                name="sales_rep_emp_num"
                value={customerData.sales_rep_emp_num || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 3 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_first_name">First Name<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_first_name"
                name="cust_first_name"
                value={customerData.cust_first_name || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 4 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_last_name">Last Name<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_last_name"
                name="cust_last_name"
                value={customerData.cust_last_name || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 5 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_father_name">Father Name<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_father_name"
                name="cust_father_name"
                value={customerData.cust_father_name || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 6 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_mother_name">Mother Name<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_mother_name"
                name="cust_mother_name"
                value={customerData.cust_mother_name || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 7 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_spouse_name">Spouse Name<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_spouse_name"
                name="cust_spouse_name"
                value={customerData.cust_spouse_name || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 8 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_dob">Date of Birth<span style={{ color: "red" }}>*</span></label>
              <input
                type="date"
                id="cust_dob"
                name="cust_dob"
                value={customerData.cust_dob || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 9 */}
            <div className="col-md-6 mb-3"style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_gender">Gender<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_gender"
                name="cust_gender"
                value={customerData.cust_gender || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 10 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_maritial_sts">Marital Status<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_maritial_sts"
                name="cust_maritial_sts"
                value={customerData.cust_maritial_sts || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 11 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_phone">Phone Number<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_phone"
                name="cust_phone"
                value={customerData.cust_phone || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 12 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_mobile">Mobile<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_mobile"
                name="cust_mobile"
                value={customerData.cust_mobile || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 13 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_alt_mobile">Alternative Mobile<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_alt_mobile"
                name="cust_alt_mobile"
                value={customerData.cust_alt_mobile || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 14 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_fax">Fax Number<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_fax"
                name="cust_fax"
                value={customerData.cust_fax || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 15 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_email">Email<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_email"
                name="cust_email"
                value={customerData.cust_email || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 16 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_is_disable">Customer is Disable?<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_is_disable"
                name="cust_is_disable"
                value={customerData.cust_is_disable || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 17 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_edu_qualification">Education Qualification<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_edu_qualification"
                name="cust_edu_qualification"
                value={customerData.cust_edu_qualification || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 18 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_occupation">Occupation<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_occupation"
                name="cust_occupation"
                value={customerData.cust_occupation || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 19 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_pan">PAN<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_pan"
                name="cust_pan"
                value={customerData.cust_pan || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 20 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_aadhar">Aadhaar<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_aadhar"
                name="cust_aadhar"
                value={customerData.cust_aadhar || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 21 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_passport">Passport<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_passport"
                name="cust_passport"
                value={customerData.cust_passport || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 22 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_reg_date">Registration Date<span style={{ color: "red" }}>*</span></label>
              <input
                type="date"
                id="cust_reg_date"
                name="cust_reg_date"
                value={customerData.cust_reg_date || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 23 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_disability">Disability<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_disability"
                name="cust_disability"
                value={customerData.cust_disability || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 24 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_type_disability">Disability Type<span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                id="cust_type_disability"
                name="cust_type_disability"
                value={customerData.cust_type_disability || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

            {/* Field 25 */}
            <div className="col-md-6 mb-3" style={{ marginBottom: "15px" }}>
              <label htmlFor="cust_percent_disability">Disability Percent<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="cust_percent_disability"
                name="cust_percent_disability"
                value={customerData.cust_percent_disability || ""}
                onChange={handleChange}
                className="form-control"
                style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
                required
              />
            </div>

          </div>
        </form>
        {/* Add Customer button */}
        <div className="form-row" d-flex justify-content-center>
          <div className="col text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add Customer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
