var AllUsers = createReactClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(user) {
		this.props.onUpdate(user);
	},
	render: function() {
		var users= this.props.users.map((user) => {
			return (
				<div key={user.id}>
					<table className="table table-bordered">
						<thead>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Mobile Number</th>
							<th>Phone Number</th>
							<th>Action</th>
						</thead>
						<User user={user}
							handleDelete={this.handleDelete.bind(this, user.id)}
							handleUpdate={this.onUpdate}/>
					</table>
				</div>
			)
		});

		return(
			<div>
				{users}
			</div>
		)
	}
});