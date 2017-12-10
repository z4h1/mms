cordova.define("org.apache.cordova.plugin.mms", function(require, exports, module) { var mms = {
	send: function(phone, message, imageFile, method, success, failure) {
		phone = sms.convertPhoneToArray(phone);

		cordova.exec(
			success,
			failure,
			'Mms',
			'send',
			[phone, message, imageFile, method]
		);
	},

	convertPhoneToArray: function(phone) {
		if(typeof phone === 'string' && phone.indexOf(',') !== -1) {
			phone = phone.split(',');
		}
		if(Object.prototype.toString.call(phone) !== '[object Array]') {
			phone = [phone];
		}
		return phone;
	}
};

module.exports = mms;

});
