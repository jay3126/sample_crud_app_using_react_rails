var Body = createReactClass({
	getInitialState() {
		return { users: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/users.json', (response) => { this.setState({ users: response }) });
	},

	// getInitialState() and componentDidMount()
	handleSubmit(user) {
		var newState = [user].concat(this.state.users);
		this.setState({ users: newState })
	},

	handleDelete(id) {
		$.ajax({
			url: `/api/v1/users/${id}`,
			type: 'DELETE',
			success:() => {
				this.removeUser(id);
			}
		});
	},

	handleUpdate(user) {
		$.ajax({
			url: `/api/v1/users/${user.id}`,
			type: 'PUT',
			data: { user: user },
			success: () => {
				this.updateUsers(user);
			}
		}
	)},

	updateUsers(user) {
		var users = this.state.users.filter((i) => { return i.id != user.id });
		// users.push(user);
		var newSetUsers = [user].concat(users);
		this.setState({users: newSetUsers });
	},

	removeUser(id) {
		var newUsers = this.state.users.filter((user) => {
				return user.id != id;
		});
		this.setState({ users: newUsers });
	},

	// renders the AllUsers and NewUser component
	render: function() {
		return (
			<div>
				<NewUser handleSubmit={this.handleSubmit}/>
				<AllUsers users={this.state.users} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
			</div>
		)
	}
});