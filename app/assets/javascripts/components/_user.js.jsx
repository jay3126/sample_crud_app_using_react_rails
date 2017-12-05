var User = createReactClass({
	getInitialState() {
		return {editable: false}
	},

	handleEdit() {
		if(this.state.editable) {
			var first_name = this.first_name.value;
			var last_name = this.last_name.value;
			var mobile_number = this.mobile_number.value;
			var phone_number = this.phone_number.value;
			var id = this.props.user.id;
			var user = {id: id , first_name: first_name, last_name: last_name, mobile_number: mobile_number, phone_number: phone_number};
			this.props.handleUpdate(user);
		}
		this.setState({ editable: !this.state.editable })
	},

	render: function() {
		var first_name = this.state.editable ? <input type='text' ref={node => this.first_name = node} defaultValue={this.props.user.first_name} /> : <h3>{this.props.user.first_name}</h3>;
		var last_name = this.state.editable ? <input type='text' ref={node => this.last_name = node} defaultValue={this.props.user.last_name} /> : <h3>{this.props.user.last_name}</h3>;
		var mobile_number = this.state.editable ? <input type='text' ref={node => this.mobile_number = node} defaultValue={this.props.user.mobile_number} /> : <h3>{this.props.user.mobile_number}</h3>;
		var phone_number = this.state.editable ? <input type='text' ref={node => this.phone_number = node} defaultValue={this.props.user.phone_number} /> : <h3>{this.props.user.phone_number}</h3>;
		return (
			<div>
				<div>First Name: {first_name}</div>
				<div>Last Name: {last_name}</div>
				<div>Mobile Number: {mobile_number}</div>
				<div>Phone Number: {phone_number}</div>
				<button onClick={this.props.handleDelete} >Delete</button>
				<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
			</div>
		)
	}
});