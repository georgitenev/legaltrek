Ext.define('LegaltrekApp.store.Currency', {
    extend: 'Ext.data.Store',

    requires: [
        'LegaltrekApp.model.Currency'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Currency',
            autoLoad: true,
            model: 'LegaltrekApp.model.Currency'
        }, cfg)]);
    }
});