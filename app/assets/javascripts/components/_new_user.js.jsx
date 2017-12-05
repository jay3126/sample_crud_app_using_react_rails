var NewUser = createReactClass({
	handleClick() {
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
			<div>
				<div>First Name: <input ref={node => this.first_name = node} placeholder='Enter the first name of the user' /></div>
				<div>Last Name: <input ref={node => this.last_name = node} placeholder='Enter the last name of the user' /></div>
				<div>Mobile Number: <input ref={node => this.mobile_number = node} placeholder='Enter the mobile number of the user' /></div>
				<div>Phone Number: <input ref={node => this.phone_number = node} placeholder='Enter the phone number of the user' /></div>
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});