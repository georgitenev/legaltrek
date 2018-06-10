Ext.define('LegaltrekApp.view.billing.form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.billing.form',

    requires: [
        'LegaltrekApp.view.billing.formViewModel',
        'LegaltrekApp.view.billing.formViewController',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.form.Label'
    ],

    config: {
        buttons: [
            {
                text: 'Submit',
                formBind: true,
                handler: function() {
                    this.lookupController().submitForm();
                }
            },
            '-',
            {
                text: 'Reset',
                handler: function() {
                    this.lookupController().resetForm();
                }
            }
        ]
    },

    controller: 'billing.form',
    viewModel: {
        type: 'billing.form'
    },
    itemId: 'newPanel',
    defaults: {
        width: 400
    },
    title: 'Add new billing',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center',
        padding: 10
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name*',
            allowBlank: false,
            bind: {
                value: '{billing.name}'
            }
        },
        {
            xtype: 'textareafield',
            height: 200,
            fieldLabel: 'Description',
            bind: {
                value: '{billing.description}'
            }
        },
        {
            xtype: 'textfield',
            validator: function(value) {
                var regEx = /^([0-9]{1,6})[\.]?([0-9]{1,4})?(.*)/g,
                    matches = regEx.exec(value);

                //didn't match or catch non-numeric characters
                if(!matches || matches[3]){
                    return "Values in format 123456.7890 allowed";
                }

                return true;
            },
            fieldLabel: 'Price*',
            allowBlank: false,
            bind: {
                value: '{billing.price}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Currency',
            editable: false,
            displayField: 'name',
            forceSelection: true,
            valueField: 'id',
            bind: {
                value: '{billing.currency}',
                store: 'Currency'
            }
        },
        {
            xtype: 'label',
            style: 'font-size: 10px',
            text: 'Fields marked with * are required.'
        }
    ]

});