Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'Billing',
        'Currency'
    ],
    stores: [
        'Billing',
        'Currency'
    ],
    views: [
        'MainView',
        'billing.grid',
        'billing.form',
        'EditView'
    ],
    controllers: [
    ],
    name: 'LegaltrekApp',

    launch: function() {
        Ext.create('LegaltrekApp.view.MainView');
    }

});
