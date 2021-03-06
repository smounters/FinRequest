/**
 * Created by Serhii Mykhailovskyi on 23.05.14.
 */

Ext.define('FR.model.Companies.Company', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'payment_type', type: 'int'},
		{name: 'active', type: 'boolean'},
		{name: 'comment', type: 'string'}
	]
});
