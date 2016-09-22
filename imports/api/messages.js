import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export let Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
    Meteor.publish('messages', () => {
        return Messages.find();
    });
}

Meteor.methods({
    'messages.insert'(message, name, picture, email) {
        Messages.insert({
            name,
            picture,
            email,
            message,
            createdAt: new Date()
        });
    }
});
