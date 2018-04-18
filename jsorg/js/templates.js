const pages = {
    init() {
        this.login = `<section id="login">
        <h1>Login</h1>
        <div class="form">
	        <p>
		        <label for="myemail">email:</label>
		        <input id="myemail" rel="js-myemail">
	        </p>
	        <p>
		        <label for="mypw">password:</label>
		        <input id="mypw" type="password" rel="js-mypw">
	        </p>
	        <p>
		        <input type="button" value="login" rel="js-login">
	        </p>
        </div>
    </section>`;

        this.register = `<section id="register">
            <div class="form">
		        <h1>Register</h1>
		        <p>
			        <label for="myname">name:</label>
			        <input id="myname" rel="js-myname">
		        </p>
		        <p>
			        <label for="myemail">email:</label>
			        <input id="myemail" rel="js-myemail">
		        </p>
		        <p>
			        <label for="mypw">password:</label>
			        <input id="mypw" type="password" rel="js-mypw">
		        </p>
		        <p>
			        <label for="confirmpw">confirm:</label>
			        <input id="confirmpw" type="password" rel="js-confirmpw">
		        </p>
		        <p>
			        <input type="button" value="Register" rel="js-register">
		        </p>
	        </div>
        </section>`
    }
};