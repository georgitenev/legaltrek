Ext.define('LegaltrekApp.view.billing.formViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.billing.form',

    resetForm: function() {
        // this.getView().getForm().reset();
        this.getViewModel().set('billing',{'currency': 0});
    },

    submitForm: function() {
        var form = this.getView().getForm();
        if (form.isValid()) {
            var billing = this.getViewModel().get('billing');

            if(!billing.isModel){
                billing = new LegaltrekApp.model.Billing(billing);
            }

            billing.save({
                success: function(){
                    if(this.getView().isEditForm){
                        //close edit window
                        this.getView().up('window').close();
                    }
                    else {
                         this.resetForm();
                    }
                },
                scope: this
            });
        }
    }

});
