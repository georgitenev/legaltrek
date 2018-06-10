Ext.define('LegaltrekApp.view.EditViewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editview',

    onEditViewShow: function(component, eOpts) {
        var view = this.getView();

        if(!Ext.isEmpty(view.record)){
            this.lookupReference('billingform_reference').getViewModel().set('billing', view.record);
        }
    }

});
