import DS from "ember-data";

// export default DS.FixtureAdapter.extend({});

export default DS.RESTAdapter.extend({
	host: 'http://127.0.0.1:1337'
});