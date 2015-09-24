import Store from '../store';
import AjaxAdapter from '../adapters/ajax';
import LocalstorageAdapter from '../adapters/localstorage';
import DebugAdapter from '../debug-adapter';

/**
 * @module initializers
 */

/*
 * Register sl-ember-store objects to consuming application
 *
 * @function sl-ember-store
 * @param    {Ember.Registry}      registry
 * @param    {Ember.Application}   application
 * @returns  {void}
 */
export default function( registry, application ) {
    var localstorageAdapter = LocalstorageAdapter.extend();

    localstorageAdapter.reopenClass({
        namespace: application.get( 'modulePrefix' )
    });

    registry.register( 'data-adapter:main', DebugAdapter );
    registry.register( 'service:store', Store );
    registry.register( 'adapter:ajax', AjaxAdapter );
    registry.register( 'adapter:localstorage', localstorageAdapter );

    application.inject( 'controller', 'store', 'service:store' );
    application.inject( 'route', 'store', 'service:store' );
    application.inject( 'adapter', 'store', 'service:store' );
    application.inject( 'data-adapter', 'store', 'service:store' );
}
