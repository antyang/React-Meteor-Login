FlowRouter.route("/", {
	name: "Home",
	action(params){
		// ReactLayout.render(Home);
		renderMainLayoutWith(<Home />);
	}
});

FlowRouter.route("/login", {
	name: "Login",
	action(params){
		renderMainLayoutWith(<UserLogin />); //userlogin component
	}
});

function renderMainLayoutWith(component){
	ReactLayout.render(MainLayout, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
}