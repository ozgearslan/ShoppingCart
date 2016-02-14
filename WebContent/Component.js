jQuery.sap.declare("sap.ui.demo.myFiori.Component");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ui.demo.myFiori.MyRouter");
sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	metadata : {
		name : "Product App",
		version : "1.0",
		includes : ["css/style.css"],
		dependencies : {
			libs : [ "sap.m" ],
			components : []
		},
		rootView : "sap.ui.demo.myFiori.view.RootApp", 
		

		config : {
		// resourceBundle : "i18n/messageBundle.properties",
		// serviceConfig : {
		// name : "Northwind",
		// serviceUrl : "proxy/http/services.odata.org/Northwind/Northwind.svc/"
		// }
		},

		
		routing : {
			config : {
				routerClass : sap.ui.demo.myFiori.MyRouter,
				viewType : "XML",
				viewPath : "sap.ui.demo.myFiori.view",
				// targetAggregation : "pages",
				clearTarget : false
			},
			routes : [

			{
				pattern : "",
				name : "RootSplitApp",
				view : "RootSplitApp",
				targetAggregation : "pages",
				targetControl : "RootAppId",

				subroutes : [

				{ //ilk master
					pattern : "",
					name : "Home",
					view : "Home",
					targetAggregation : "masterPages",
					targetControl : "RootSplitAppId",
					subroutes : [ {

					} ],

				}, { //ikinci master
					pattern : "Master/{category}",
					name : "Master",
					view : "Master",
					preservePageInSplitContainer : true,
					targetAggregation : "masterPages",
					targetControl : "RootSplitAppId",
					subroutes : [ {
						pattern : "Detail/{category}/{ProductId}",
						name : "Detail",
						view : "Detail",
						targetAggregation : "detailPages"
					}, ],

				} ],

			},

			]

		},


	},

	init : function() {
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		var mConfig = this.getMetadata().getConfig();
		var rootPath = jQuery.sap.getModulePath("sap.ui.demo.myFiori.");

		var oModel1 = new sap.ui.model.json.JSONModel("model/Product.json");
        this.setModel(oModel1);
		
		

		this.getRouter().initialize();
	},

});
