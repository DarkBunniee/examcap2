sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("pos.controller.View1", {
        onInit() {
        },
        onRowPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            var sID = oContext.getProperty("ID");

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView2", {
                    ID: sID
                });
        },
        onCreatePO: function () {
            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView3");
        }
    });
});