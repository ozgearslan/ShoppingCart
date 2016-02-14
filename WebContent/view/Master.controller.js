jQuery.sap.declare("util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	onInit : function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRouteMatched(this.attachRouteMatched, this);

	},
	attachRouteMatched : function(oEvent) {
		var sName = oEvent.getParameter("Master");
		if (oEvent.getParameter("name") === "Master") {
			var oProductList = this.getView().byId("productList");	
			var oBinding = oProductList.getBinding("items");
			oBinding.attachDataReceived(this.fnDataReceived, this);
			console.log( oBinding);
			var sId = oEvent.getParameter("arguments").category;
		//	var sId = "GC";
			var oFilter = new sap.ui.model.Filter("Category", sap.ui.model.FilterOperator.EQ, sId);
			oBinding.filter([ oFilter ]);
			//MASTER PAGE DOESNT LOAD TWÝCE TÝME
			this.router.detachRouteMatched(this.attachRouteMatched, this);
		}
	},
	
	
	handleListItemPress : function(Evt) {
		
		var oContext = Evt.getSource().getBindingContext();
		console.log(oContext);
		this.router.navTo("Detail", {category:  oContext.getProperty("Category"), ProductId: oContext.getProperty("ProductId")});
			
		
	},
	handleNavButtonPress: function()
	{ //navBack is back bage everytime so use navTo
		this.router.navTo("Home");
	},
	


});

