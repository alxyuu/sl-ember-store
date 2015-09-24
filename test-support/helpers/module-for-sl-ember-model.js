import { moduleFor } from 'ember-qunit';
import Ember from 'ember';
import Store from 'sl-ember-store/store';


export default function moduleForSlEmberModel(name, description, callbacks) {

    moduleFor('model:' + name, description, callbacks, function(container, context, defaultSubject) {

        container.register('service:store', Store );

        context.__setup_properties__.store = function(){
            return container.lookup('service:store');
        };

        if (context.__setup_properties__.subject === defaultSubject) {
            context.__setup_properties__.subject = function(options) {
                return Ember.run(function() {
                    return container.lookup('service:store').createRecord(name, options);
                });
            };
        }
    });
}
