import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/login.css';
const LoginPage = () => {
    let history = useHistory();
    function handleLogin() {
        history.push("/home");
      }
    function handleRegister(){
        history.push("/register");
      }
    return ( 
            <div className="inner-container">
                <h1>Login</h1>
                <hr></hr>
                {/* <label>Staff Id</label> */}
                <div class="row">
                    <div className="col-sm">
                        <label>Staff ID : </label>
                    </div>
                    <div className="col-sm">
                    <input type="text"/>
                    </div>
                </div>
                
                {/* <label>Password</label> */}
                <div class="row">
                    <div className="col-sm">
                        <label>Password : </label>
                    </div>
                    <div className="col-sm">
                    <input type="password" class="form-control" name="password" required="required"/>
                    </div>
                </div>
                <div>
                    <button onClick={handleLogin}>Login </button>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <span>Don't have account ?</span>
                    </div>
                    <div className="col-lg">
                        <span onClick={handleRegister} style={{
                            textDecoration:"underline",
                            color:"red"
                        }}>Create an account</span>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage