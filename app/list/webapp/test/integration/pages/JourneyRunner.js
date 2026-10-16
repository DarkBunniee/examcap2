sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"list/test/integration/pages/POHeadersList.gen",
	"list/test/integration/pages/POHeadersObjectPage.gen",
	"list/test/integration/pages/POItemsObjectPage.gen"
], function (JourneyRunner, POHeadersListGenerated, POHeadersObjectPageGenerated, POItemsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('list') + '/test/flp.html#app-preview',
        pages: {
			onThePOHeadersListGenerated: POHeadersListGenerated,
			onThePOHeadersObjectPageGenerated: POHeadersObjectPageGenerated,
			onThePOItemsObjectPageGenerated: POItemsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

