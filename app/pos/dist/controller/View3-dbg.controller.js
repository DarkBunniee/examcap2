sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("pos.controller.View3", {

        onSubmit: async function () {
            var oView = this.getView();

            var sPoNumber = oView.byId("poNumber").getValue().trim();
            var sSupplier = oView.byId("supplier").getValue().trim();
            var sCurrency = oView.byId("currency").getSelectedKey();
            var sAmount = oView.byId("totalAmount").getValue().trim();

            if (!sPoNumber || !sSupplier || !sCurrency || !sAmount) {
                MessageBox.warning("Please fill in all required fields.");
                return;
            }

            if (!Number.isFinite(Number(sAmount)) || Number(sAmount) < 0) {
                MessageBox.warning("Please enter a valid total amount.");
                return;
            }

            var oPO = {
                poNumber: sPoNumber,
                supplier: sSupplier,
                currency: sCurrency,
                totalAmount: sAmount
            };

            var oModel = this.getOwnerComponent().getModel();
            var oListBinding = oModel.bindList("/POHeaders");
            var oContext;

            try {
                oContext = oListBinding.create(oPO);

                await oContext.created();

                MessageToast.show("Purchase order created successfully.");

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteView1", {}, true);

            } catch (oError) {
                MessageBox.error(
                    "Unable to create purchase order. Please check the entered data and try again."
                );
            } finally {
                oListBinding.destroy();
            }
        },

        onCancel: function () {
            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView1", {}, true);
        }

    });
});