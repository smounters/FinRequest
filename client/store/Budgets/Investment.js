/**
 * Created by Serhii Mykhailovskyi on 01.06.14.
 */

Ext.define('FR.store.Budgets.Investment', {
	extend: 'Ext.data.Store',
	model: 'FR.model.Budgets.Budget',
	autoLoad: false,
	autoSync: false,

	proxy: {
		type: 'ajax',
		api: {
			read: 'budgets/investment/list'
		},
		actionMethods: {
			read: 'POST'
		},
		reader: {
			type: 'json',
			root: 'investmentlist'
		},
		listeners: {
			exception: function (proxy, response) {
				var text = Ext.JSON.decode(response.responseText);
				error(text.message);
			}
		}

	}
});
