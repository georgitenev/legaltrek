Ext.define('LegaltrekApp.view.billing.gridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billing.grid',

    removeBilling: function(record) {
        record.erase();
    },

    editBilling: function(record) {
        var EditView = Ext.create('LegaltrekApp.view.EditView', {
            record: record
        });

        EditView.show();
    }

});
