Ext.define('LegaltrekApp.view.EditView', {
    extend: 'Ext.window.Window',
    alias: 'widget.editview',

    requires: [
        'LegaltrekApp.view.EditViewViewModel',
        'LegaltrekApp.view.EditViewViewController',
        'LegaltrekApp.view.billing.form',
        'Ext.form.Panel'
    ],

    controller: 'editview',
    viewModel: {
        type: 'editview'
    },
    height: 460,
    width: 440,
    layout: 'border',
    title: 'Edit billing',

    items: [
        {
            xtype: 'billing.form',
            reference: 'billingform_reference',
            header: false,
            region: 'center',
            isEditForm: true
        }
    ],
    listeners: {
        show: 'onEditViewShow'
    }

});