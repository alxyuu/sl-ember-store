import Ember from 'ember';
import ModelizeMixin from 'sl-ember-modelize/mixins/modelize';

/**
 * @class adapter
 */
export default Ember.Object.extend( ModelizeMixin, {

    /**
     * Run Pre Query Hooks
     *
     * @function runPreQueryHooks
     * @param    {object} query - An object containing data about the query to be run
     * @returns  {void}
     */
    runPreQueryHooks: function( query ) {
        this.get( 'container' ).lookup( 'service:store' ).runPreQueryHooks( query );
    },

    /**
     * Run Post Query Hooks
     *
     * @function runPostQueryHooks
     * @param    {object} response - An object containing the reponse data
     * @returns  {void}
     */
    runPostQueryHooks: function( response ) {
        this.get( 'container' ).lookup( 'service:store' ).runPostQueryHooks( response );
    },

    /**
     * Placeholder function for find() to be overwritten by child classes
     *
     * @function find
     * @throws   {Ember.assert}
     * @returns  {void}
     */
    find: function() {
        Ember.assert( 'Your model should overwrite adapterType', true );
    }

});
