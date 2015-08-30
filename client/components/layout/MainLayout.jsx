MainLayout = React.createClass({
	propTypes: {},
	mixins: [ //plug-ins
		// ReactMeteorData
	],

	getInitialState(){
		return {}
	},

	getMeteorData(){ //query the database to grab data
		// return {
			// currentUser: Meteor.user()
		// };
	},

	render: function() {
		return (
			<div>
				{this.props.header}

				{this.props.content}

				{this.props.footer}
			</div>
		);
	}

});

