Ext.define('LegaltrekApp.model.Billing', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Number',
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
        },
        {
            type: 'string',
            name: 'description'
        },
        {
            type: 'float',
            name: 'price'
        },
        {
            type: 'int',
            name: 'currency'
        }
    ],

    proxy: {
        type: 'rest',
        url: './../private/billing'
    }
});