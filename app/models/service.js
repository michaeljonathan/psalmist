import DS from "ember-data";

var Service = DS.Model.extend({

	name: DS.attr('string'),

	items: DS.hasMany('service-item', {'async': true})

});

export default Service;
