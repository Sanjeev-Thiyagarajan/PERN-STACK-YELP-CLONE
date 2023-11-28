require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

  /*  USER MASTER  */

// Create a User Mater
app.post("/api/v1/userMasters", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO user_master (um_seq, um_login_id, um_password, um_role, um_name, um_address, um_email, um_unique_id, um_id_type, um_dept, um_login_sts, um_created_time, um_last_login, um_ln_attempts) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *",
      [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        User_Masters: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// Get all User Masters
app.get("/api/v1/userMasters", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const results = await db.query(
      "select * from user_master"
    );
    console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        User_Masters: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a user Master
app.get("/api/v1/userMasters/:um_seq", async (req, res) => {
  console.log(req.params.um_seq);

  try {
    const results = await db.query(
      "select * from user_master where um_seq = $1 ORDER BY um_seq, um_role",
      [req.params.um_seq]
    );

    res.status(200).json({
      status: "success",
      data: {
        User_Masters: results.rows[0],
        // reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update User Master

app.put("/api/v1/userMasters/:um_seq", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE user_master SET um_seq = $1, um_login_id = $2, um_password = $3, um_role =$4, um_name =$5, um_address=$6, um_email=$7, um_unique_id=$8, um_id_type=$9, um_dept=$10, um_login_sts=$11, um_created_time=$12, um_last_login=$13, um_ln_attempts=$14 where um_seq = $1 returning *",
      [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts]
    );

    res.status(200).json({
      status: "success",
      data: {
        User_Masters: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete User Master

app.delete("/api/v1/userMasters/:um_seq", async (req, res) => {
  try {
    const results = db.query("DELETE FROM user_master where um_seq = $1", [
      req.params.um_seq,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});

// app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
//   try {
//     const newReview = await db.query(
//       "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
//       [req.params.id, req.body.name, req.body.review, req.body.rating]
//     );
//     console.log(newReview);
//     res.status(201).json({
//       status: "success",
//       data: {
//         review: newReview.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });


/* CUSTOMERS */
// Create a User Mater
app.post("/api/v1/customers", async (req, res) => {
  console.log(req.body);

  try {
    const customerData = await db.query(
      "INSERT INTO customers (customer_id, sales_rep_emp_num, cust_first_name, cust_last_name, cust_father_name, cust_mother_name, cust_spouse_name, cust_dob, cust_gender, cust_maritial_sts, cust_phone, cust_mobile, cust_alt_mobile, cust_fax, cust_email, cust_is_disable, cust_edu_qualification, cust_occupation, cust_pan, cust_aadhar, cust_passport, cust_reg_date, cust_disability, cust_type_disability, cust_percent_disability) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) returning *",
      [req.body.customer_id, req.body.sales_rep_emp_num, req.body.cust_first_name, req.body.cust_last_name, req.body.cust_father_name, req.body.cust_mother_name, req.body.cust_spouse_name, req.body.cust_dob, req.body.cust_gender, req.body.cust_maritial_sts, req.body.cust_phone, req.body.cust_mobile, req.body.cust_alt_mobile, req.body.cust_fax, req.body.cust_email, req.body.cust_is_disable, req.body.cust_edu_qualification, req.body.cust_occupation, req.body.cust_pan, req.body.cust_aadhar, req.body.cust_passport, req.body.cust_reg_date, req.body.cust_disability, req.body.cust_type_disability, req.body.cust_percent_disability]
    );
    console.log(customerData);
    res.status(201).json({
      status: "success",
      data: {
        Customers: customerData.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get all Customers
app.get("/api/v1/customers", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const customerData = await db.query(
      "select * from customers"
    );
    console.log(customerData);

    res.status(200).json({
      status: "success",
      results: customerData.rows.length,
      data: {
        Customers: customerData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a Customer by Customer ID
app.get("/api/v1/customers/:customer_id", async (req, res) => {
  console.log(req.params.customer_id);

  try {
    const customerData = await db.query(
      "select * from customers where customer_id = $1",
      [req.params.customer_id]
    );

    res.status(200).json({
      status: "success",
      data: {
        Customers: customerData.rows[0],
        // reviews: reviews.rows,
      },  
    });
  } catch (err) {
    console.log(err);
  }
});

// Update User Master

app.put("/api/v1/customers/:customer_id", async (req, res) => {
  try {
    const customerData = await db.query(
      "UPDATE customers SET customer_id=$1, sales_rep_emp_num=$2, cust_first_name=$3, cust_last_name=$4, cust_father_name=$5, cust_mother_name=$6, cust_spouse_name=$7, cust_dob=$8, cust_gender=$9, cust_maritial_sts=$10, cust_phone=$11, cust_mobile=$12, cust_alt_mobile=$13, cust_fax=$14, cust_email=$15, cust_is_disable=$16, cust_edu_qualification=$17, cust_occupation=$18, cust_pan=$19, cust_aadhar=$20, cust_passport=$21, cust_reg_date=$22, cust_disability=$23, cust_type_disability=$24, cust_percent_disability=$25 where customer_id = $1 returning *",
      [req.body.customer_id, req.body.sales_rep_emp_num, req.body.cust_first_name, req.body.cust_last_name, req.body.cust_father_name, req.body.cust_mother_name, req.body.cust_spouse_name, req.body.cust_dob, req.body.cust_gender, req.body.cust_maritial_sts, req.body.cust_phone, req.body.cust_mobile, req.body.cust_alt_mobile, req.body.cust_fax, req.body.cust_email, req.body.cust_is_disable, req.body.cust_edu_qualification, req.body.cust_occupation, req.body.cust_pan, req.body.cust_aadhar, req.body.cust_passport, req.body.cust_reg_date, req.body.cust_disability, req.body.cust_type_disability, req.body.cust_percent_disability]
    );

    res.status(200).json({
      status: "success",
      data: {
        Customers: customerData.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete User Master

app.delete("/api/v1/customers/:customer_id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM customers where customer_id = $1", [
      req.params.customer_id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});


//Customers for User Master
app.get("/api/v1/userCustomers/:um_seq", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const userCustomerData = await db.query(
      "SELECT * FROM customers INNER JOIN user_master ON customers.sales_rep_emp_num = user_master.um_seq where sales_rep_emp_num=$1",
      [req.params.um_seq]
    );
    console.log(userCustomerData);

    res.status(200).json({
      status: "success",
      results: userCustomerData.rows.length,
      data: {
        userCustomerData: userCustomerData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});


///Login 

app.post("/api/v1/login", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO login (um_login_id, um_password, um_role, um_name, um_email) values ($1, $2, $3, $4, $5) returning *",
      [req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_email]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        Login: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/v1/login/:um_login_id", async (req, res) => {
  console.log(req.params.um_login_id);

  try {
    const loginData = await db.query(
      "select * from login where um_login_id = $1",
      [req.params.um_login_id]
    );

    res.status(200).json({
      status: "success",
      data: {
        Login: loginData.rows[0],
        // reviews: reviews.rows,
      },  
    });
  } catch (err) {
    console.log(err);
  }
});


////// Volunteers

app.post("/api/v1/userLinkage", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO user_linkage (ul_seq, ul_emp_id, ul_vol_id, ul_candidate_id) VALUES ($1, $2, $3, $4) returning *",
      [req.body.ul_seq, req.body.ul_emp_id, req.body.ul_vol_id, req.body.ul_candidate_id]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        Linked_Users: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// Get all Volunteers under User Master Um seq
app.get("/api/v1/userLinkage/:um_seq", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const results = await db.query(
      "select * from user_master where um_role =$1 and um_seq in( select ul_vol_id from user_linkage where ul_emp_id=$2)",
      [12, req.params.um_seq]
    );
    console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        Linked_Users: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a user Master
// app.get("/api/v1/userLinkage/:um_seq", async (req, res) => {
//   console.log(req.params.um_seq);

//   try {
//     const results = await db.query(
//       "select * from user_master where um_seq = $1 ORDER BY um_seq, um_role",
//       [req.params.um_seq]
//     );

//     res.status(200).json({
//       status: "success",
//       data: {
//         User_Masters: results.rows[0],
//         // reviews: reviews.rows,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// Update User Master

// app.put("/api/v1/userMasters/:um_seq", async (req, res) => {
//   try {
//     const results = await db.query(
//       "UPDATE user_master SET um_seq = $1, um_login_id = $2, um_password = $3, um_role =$4, um_name =$5, um_address=$6, um_email=$7, um_unique_id=$8, um_id_type=$9, um_dept=$10, um_login_sts=$11, um_created_time=$12, um_last_login=$13, um_ln_attempts=$14 where um_seq = $1 returning *",
//       [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts]
//     );

//     res.status(200).json({
//       status: "success",
//       data: {
//         User_Masters: results.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(req.params.id);
//   console.log(req.body);
// });

// Delete User Master

// app.delete("/api/v1/userMasters/:um_seq", async (req, res) => {
//   try {
//     const results = db.query("DELETE FROM user_master where um_seq = $1", [
//       req.params.um_seq,
//     ]);
//     res.status(204).json({
//       status: "sucess",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
