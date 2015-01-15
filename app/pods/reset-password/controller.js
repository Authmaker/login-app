import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
    validations: {
        email: {
            'is-email': true
        }
    },

    actions: {
        resetPassword: function(){
            return this.validate()
            .then(function(){
                Ember.$.post('localauth.bloo.ie/sign_up', {
                    email: this.get('email'),
                    password: this.get('password'),
                    tnc: true
                }, function(err, data){
                    if(err){
                        this.set('error', 'Signup failed, please try again');
                        return;
                    }

                    this.set('message', 'Reset email sent successfully, please check your inbox for more instructions');

                }.bind(this));
                //this.set('message', 'Reset email sent successfully, please check your inbox for more instructions');
                // this.get('content').save().then(function(){

                // }.bind(this), function(err){
                //     this.set('error', err.message);

                //     throw err;
                // }.bind(this));
            }.bind(this)).catch(function(err){
                if(err.email.length){
                    this.notifications.addNotification({
                        message: 'There is no account associated with this email',
                        type: 'error'
                    });
                }

            }.bind(this));
        }
    }
});
