Ext.define('LegaltrekApp.view.billing.grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.billing.grid',

    requires: [
        'LegaltrekApp.view.billing.gridViewModel',
        'LegaltrekApp.view.billing.gridViewController',
        'Ext.grid.column.Number',
        'Ext.grid.column.Action',
        'Ext.panel.Tool'
    ],

    controller: 'billing.grid',
    viewModel: {
        type: 'billing.grid'
    },
    itemId: 'list_allPanel',
    title: 'List all billings',
    store: 'Billing',

    columns: [
        {
            xtype: 'gridcolumn',
            flex: 1,
            dataIndex: 'name',
            text: 'Name'
        },
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                metaData.tdAttr = 'data-qtip="' + value + '"';

                return value;
            },
            flex: 2,
            dataIndex: 'description',
            text: 'Description'
        },
        {
            xtype: 'numbercolumn',
            width: 78,
            dataIndex: 'price',
            text: 'Price'
        },
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                var store = Ext.StoreManager.lookup('Currency'),
                    record = store? store.getById(value) : null,
                    name = record? record.getData().name : value;

                return name;
            },
            width: 78,
            dataIndex: 'currency',
            text: 'Currency'
        },
        {
            xtype: 'actioncolumn',
            width: 45,
            items: [
                {
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        this.lookupController().removeBilling(record);
                    },
                    iconCls: 'x-fa fa-remove',
                    tooltip: 'Delete billing'
                },
                {
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        this.lookupController().editBilling(record);
                    },
                    iconCls: 'x-fa fa-pencil-square-o',
                    tooltip: 'Edit billing'
                }
            ]
        }
    ],
    tools: [
        {
            xtype: 'tool',
            callback: function(owner, tool, event) {
                Ext.Msg.show({
                    title: 'Refresh all billings?',
                    message: 'You will permanently remove your billings. Would you like to continue?',
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.WARNING,
                    fn: function(btn){
                        if (btn == 'yes'){
                            //this will remove all records recursively with single requests
                            var store = Ext.StoreManager.lookup('Billing');

                            store.removeAll();
                            store.save();

                            //we cound make a single ajax request here with new route 'removeAllBilings' for example
                        }
                    },
                    scope: this
                });
            },
            tooltip: 'Refresh all billings',
            type: 'refresh'
        }
    ]

});