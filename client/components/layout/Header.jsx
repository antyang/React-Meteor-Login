Header = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			currentUser: Meteor.user(),
			lol: ":)"
		}
	},

	handleLogout(){
		Meteor.logout();
	},

	render: function(){
		let loginButton;
		let { currentUser, lol } = this.data; //de-structuring made easy ex: this.data.currentUser

		if (currentUser){
			loginButton = (
				<li>
					<a href="#" onClick={ this.handleLogout }>Logout</a>
				</li>
				)
		} else {
			loginButton = (
				<li>
					<a href="/login">Login</a>
				</li>
				)
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container">

					<div className="navbar-header">
						<a href="#" className="navbar-brand">Welcome { lol }</a>
					</div>

					<div className="collapse navbar-collapse" id="vs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="/">Home</a>
								{ loginButton }
							</li>
						</ul>
					</div>

				</div>
			</nav>
		)
	}
});