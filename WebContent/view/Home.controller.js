sap.ui.controller("sap.ui.demo.myFiori.view.Home", {

	onInit : function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		var oModel2 = new sap.ui.model.json.JSONModel("model/ProductCategory.json");
		this.getView().setModel(oModel2);
		
	},
	handleListItemPress : function(Evt) {

		var oContext = Evt.getSource().getBindingContext();
		console.log(oContext);
		this.router.navTo("Master", {category: oContext.getProperty("Category")});
		
	},
	
	//----------------- TWO PARAMETER SEARCH FÝLTER FUNCTÝON---------------
	onSearch : function (oEvt) {
		var sQuery = oEvt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("CategoryName", sap.ui.model.FilterOperator.EQ, sQuery);
			var filter2 = new sap.ui.model.Filter("NumberOfProducts", sap.ui.model.FilterOperator.EQ, sQuery);
			var aFilters = new sap.ui.model.Filter([filter, filter2], false); 	
		}
		
		var list = this.getView().byId("listid");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},
	//----------------- TWO PARAMETER SEARCH FÝLTER FUNCTÝON END ---------------

	
});

