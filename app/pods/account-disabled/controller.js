import Ember from 'ember';

export default Ember.Controller.extend({
    application: Ember.inject.controller(),

    actions: {
        logOut() {
            window.location = `/api/logout?redirect=${this.get('application.redirect_uri')}`;
        }
    }
});