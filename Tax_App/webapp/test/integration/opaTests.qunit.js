/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ivl/Tax_App/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});