import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
    validations: {
        email: {
            'is-email': true
        },
        domain: {
            'is-url': true
        },
        password: {
            presence: true
        },
        terms: {
            confirmation: true
        }
    },

    actions: {
        signUp: function(){
            return this.validate().then(function(){
                this.set('message', 'Success!');
                this.get('content').save().then(function(){

                }.bind(this), function(err){
                    this.set('error', err.message);

                    throw err;
                }.bind(this));
            }.bind(this)).catch(function(err){
                if(err.email.length){
                    this.notifications.addNotification({
                        message: 'You must enter a valid email address',
                        type: 'error'
                    });
                }
                if (err.domain.length){
                    this.notifications.addNotification({
                        message: 'You must enter a valid domain',
                        type: 'error'
                    });
                }
                if (err.password.length){
                    this.notifications.addNotification({
                        message: 'Your password is invalid',
                        type: 'error'
                    });
                }
                if (err.terms.length){
                    this.notifications.addNotification({
                        message: 'You must agree to the Blooie terms',
                        type: 'error'
                    });
                }

            }.bind(this));
        }
    }
});