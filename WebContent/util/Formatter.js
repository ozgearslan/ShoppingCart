jQuery.sap.declare("util.Formatter");
jQuery.sap.require("model.Config");

util.Formatter = {
		
		pictureUrl: function (pictureUrl) {
		//	return (!model.Config.isMock && pictureUrl) ? model.Config.getHost() + pictureUrl : pictureUrl;
		}
};
