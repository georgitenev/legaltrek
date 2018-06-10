Ext.define('LegaltrekApp.model.Currency', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.proxy.Rest'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        }
    ],

    proxy: {
        type: 'rest',
        url: './../private/currency'
    }
});