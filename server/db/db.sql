CREATE TABLE user_master (
    um_seq BIGSERIAL NOT NULL PRIMARY KEY,
    um_login_id VARCHAR(20) NOT NULL,
    um_password VARCHAR(20) NOT NULL,
    um_role NUMBER,
    um_name VARCHAR(50) NOT NULL,
    um_address VARCHAR(100) NOT NULL,
    um_email VARCHAR(20) NOT NULL,
    um_unique_id VARCHAR(20) NOT NULL,
    um_id_type NUMBER,
    um_dept NUMBER,
    um_login_sts NUMBER,
    um_created_time DATE,
    um_last_login DATE,
    um_ln_attempts VARCHAR(20)
    
);

CREATE TABLE IF NOT EXISTS customers(
    customer_id BIGSERIAL NOT NULL PRIMARY KEY,
    sales_rep_emp_num NUMBER,
    cust_first_name VARCHAR(20) NOT NULL,
    cust_last_name VARCHAR(20) NOT NULL,
    cust_mother_name VARCHAR(50) NOT NULL,
    cust_father_name VARCHAR(50) NOT NULL,
    cust_spouse_name VARCHAR(50),
    cust_dob DATE,
    cust_gender VARCHAR(10) NOT NULL,
    cust_maritial_sts VARCHAR(10) NOT NULL,
    cust_phone VARCHAR(20) NOT NULL,
    cust_mobile NUMBER,
    cust_alt_mobile NUMBER,
    cust_fax VARCHAR(20),
    cust_email NUMBER,
    cust_is_disable VARCHAR(20) NOT NULL,
    cust_edu_qualification VARCHAR(20) NOT NULL,
    cust_occupation VARCHAR(30),
    cust_pan VARCHAR(20) NOT NULL,
    cust_aadhar NUMBER,
    cust_passport VARCHAR(20),
    cust_reg_date NUMBER,
    cust_disability VARCHAR(50),
    cust_type_disability VARCHAR(20),
    cust_percent_disability VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS seva_master_data(
    smd_id BIGSERIAL NOT NULL PRIMARY KEY,
    smd_code  VARCHAR(20) NOT NULL,
    smd_type  VARCHAR(20) NOT NULL,
    smd_desc  VARCHAR(50) NOT NULL,
);
-- select *
-- from restaurants
--     left join(
--         select restaurant_id,
--             count(*),
--             TRUNC(AVG(rating, 1)) as average_rating
--         from reviews
--         group by restaurant_id
--     ) reviews on restaurants.id = reviews.restaurant_id;