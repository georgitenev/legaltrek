Ext.define('LegaltrekApp.view.MainViewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainview',

    onMenuClick: function(menu, item, e, eOpts) {
        if(item.itemId == 'list_all'){
            Ext.StoreManager.lookup('Billing').reload();
        }
        this.lookupReference('contentPanel').setActiveItem(item.itemId + 'Panel');
    }

});
