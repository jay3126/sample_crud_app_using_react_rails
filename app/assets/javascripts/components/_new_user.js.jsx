var NewUser = createReactClass({
	handleClick: function(e) {
		e.preventDefault();
		var first_name = this.first_name.value;
		var last_name = this.last_name.value;
		var mobile_number = this.mobile_number.value;
		var phone_number = this.phone_number.value;
			$.ajax({
				url: '/api/v1/users',
				type: 'POST',
				data: { user: { first_name: first_name, last_name: last_name, phone_number: phone_number, mobile_number: mobile_number } },
				success: (user) => {
					this.props.handleSubmit(user);
				}
			});
	},

	render: function() {
		return (
			<form className="form-horizontal margin_bottom">
				<div className="col-sm-6">
					<div className="form-group padding_right">
						<label>First Name:</label>
						<input type="text" ref={node => this.first_name = node} placeholder='Enter the first name of the user' className="form-control" required="true" />
						<br />
						<label>Last Name:</label>
						<input type="text" ref={node => this.last_name = node} placeholder='Enter the last name of the user' className="form-control" required="true"/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Mobile Number:</label>
						<input type="number" ref={node => this.mobile_number = node} min='0' maxLength='10' placeholder='Enter the mobile number of the user' className="form-control" required="true"/>
						<br />
						<label>Phone Number:</label>
						<input type="number" ref={node => this.phone_number = node} min='0' maxLength='12' placeholder='Enter the phone number of the user' className="form-control" required="true"/>
					</div>
				</div>
				<button onClick={this.handleClick} className="btn btn-primary">Submit</button>
			</form>
		)
	}
});