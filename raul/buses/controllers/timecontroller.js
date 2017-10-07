//controller

		angular.module('app').controller('timeController', timectrl);

		function timectrl(time) {
			var self = this;


			self.time = time;
			self.code = "";
			self.search = search;
			function search(){

				self.time.get();
			}
		}