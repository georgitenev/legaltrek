Ext.define('LegaltrekApp.store.Billing', {
    extend: 'Ext.data.Store',

    requires: [
        'LegaltrekApp.model.Billing'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Billing',
            model: 'LegaltrekApp.model.Billing'
        }, cfg)]);
    }
});