Ext.define('LegaltrekApp.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'LegaltrekApp.view.MainViewViewModel',
        'LegaltrekApp.view.MainViewViewController',
        'LegaltrekApp.view.billing.form',
        'LegaltrekApp.view.billing.grid',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.form.Panel',
        'Ext.grid.Panel'
    ],

    controller: 'mainview',
    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            itemId: 'menuPanel',
            width: 150,
            title: 'Menu',
            items: [
                {
                    xtype: 'menu',
                    floating: false,
                    itemId: 'menu',
                    items: [
                        {
                            xtype: 'menuitem',
                            itemId: 'new',
                            text: 'Add new billing',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'list_all',
                            text: 'List all billings',
                            focusable: true
                        }
                    ],
                    listeners: {
                        click: 'onMenuClick'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            reference: 'contentPanel',
            layout: 'card',
            items: [
                {
                    xtype: 'billing.form'
                },
                {
                    xtype: 'billing.grid'
                }
            ]
        }
    ]

});