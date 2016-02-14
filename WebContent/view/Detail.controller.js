jQuery.sap.declare("sap.ui.demo.myFiori.css.style");
sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	onInit : function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRouteMatched(this.attachRouteMatched, this);
	},

	attachRouteMatched : function(oEvent) {
		var sName = oEvent.getParameter("Detail");
	// local data is used in this page
	//data set is this way
		if (oEvent.getParameter("name") === "Detail") {
			var str = oEvent.getParameter("arguments").ProductId;
			console.log(str);
			var res = str.split("id_"); //id_ and number are seperated
			console.log(res);
			var x= res[1]-1; // id-1 = my index number
			console.log(x); // take first number
			var sProductPath = "/Products/" + x;
			console.log(sProductPath);
			this.oView.bindElement(sProductPath);
			
			
			this.byId("txt").addStyleClass("sapUiFTV");

		}

	},
	
	
	
});