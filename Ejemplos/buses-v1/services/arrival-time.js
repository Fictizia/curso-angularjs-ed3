// Services
angular.module('app').service('arrivalTime', arrivalTimeService);

function arrivalTimeService() {

	console.log('Service instantiated!')

	var arrivalTime = {
		list: [],
		get: get,
		clear: clear
	};

	return arrivalTime;
	

	function get(stopCode) {

		var json = '{"arrives":[{"stopId":609,"lineId":"62","isHead":"False","destination":"PRINCIPE PIO","busId":"6807","busTimeLeft":40,"busDistance":72,"longitude":-3.7209995058181,"latitude":40.413506897108,"busPositionType":2},{"stopId":609,"lineId":"41","isHead":"False","destination":"COLONIA MANZANARES","busId":"2004","busTimeLeft":62,"busDistance":281,"longitude":-3.7173413637232,"latitude":40.413861668152,"busPositionType":1},{"stopId":609,"lineId":"C1","isHead":"False","destination":"CIRCULAR 1","busId":"8903","busTimeLeft":66,"busDistance":176,"longitude":-3.7189694290948,"latitude":40.41388224079,"busPositionType":1},{"stopId":609,"lineId":"C1","isHead":"False","destination":"CIRCULAR 1","busId":"8321","busTimeLeft":68,"busDistance":244,"longitude":-3.7179847027432,"latitude":40.413875558903,"busPositionType":1},{"stopId":609,"lineId":"33","isHead":"False","destination":"PRINCIPE PIO","busId":"4233","busTimeLeft":329,"busDistance":1382,"longitude":-3.7357469049711,"latitude":40.410899311623,"busPositionType":1},{"stopId":609,"lineId":"39","isHead":"False","destination":"OPERA","busId":"4107","busTimeLeft":534,"busDistance":1851,"longitude":-3.741013846918,"latitude":40.408910909549,"busPositionType":1},{"stopId":609,"lineId":"25","isHead":"False","destination":"OPERA","busId":"4333","busTimeLeft":725,"busDistance":3146,"longitude":-3.7377242564464,"latitude":40.395987725458,"busPositionType":1},{"stopId":609,"lineId":"138","isHead":"False","destination":"CRISTO REY","busId":"4180","busTimeLeft":760,"busDistance":3455,"longitude":-3.7525989175352,"latitude":40.402227948388,"busPositionType":1},{"stopId":609,"lineId":"62","isHead":"False","destination":"PRINCIPE PIO","busId":"6805","busTimeLeft":842,"busDistance":3931,"longitude":-3.7037475543399,"latitude":40.396877024536,"busPositionType":1},{"stopId":609,"lineId":"33","isHead":"False","destination":"PRINCIPE PIO","busId":"4231","busTimeLeft":928,"busDistance":5207,"longitude":-3.761491683997,"latitude":40.403832039593,"busPositionType":1},{"stopId":609,"lineId":"41","isHead":"False","destination":"COLONIA MANZANARES","busId":"2002","busTimeLeft":1126,"busDistance":3903,"longitude":-3.6958591511859,"latitude":40.40681005141,"busPositionType":1},{"stopId":609,"lineId":"39","isHead":"False","destination":"OPERA","busId":"4102","busTimeLeft":999999,"busDistance":8220,"longitude":-3.7754759858742,"latitude":40.376794247622,"busPositionType":1},{"stopId":609,"lineId":"138","isHead":"False","destination":"CRISTO REY","busId":"4182","busTimeLeft":999999,"busDistance":5464,"longitude":-3.7597010915948,"latitude":40.386197946802,"busPositionType":1},{"stopId":609,"lineId":"25","isHead":"False","destination":"OPERA","busId":"4324","busTimeLeft":999999,"busDistance":5787,"longitude":-3.7609976784174,"latitude":40.392897173565,"busPositionType":1}]}';
		var obj = JSON.parse(json);

		arrivalTime.list = obj.arrives;

	}

	function clear() {
		arrivalTime.list = [];
	}

}
