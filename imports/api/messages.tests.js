import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Messages } from './messages';

if (Meteor.isServer) {
    describe('Messages', () => {
        describe('methods', () => {
            it('saving message', () => {
                const message = 'Olhe para mim e diga o que você vê';
                const name = 'Tyrion Lannister';
                const picture = 'http://goo.gl/cHVI9H';
                const email = 'tyrion@gmail.com';

                Messages.insert({ message, name, picture, email });
            })

            it('find last message', () => {
                const lastMessage = Messages.find({}, { sort: { createdAt: 1 }, limit: 1 }).fetch()
                assert.equal(lastMessage[0].message, 'Olhe para mim e diga o que você vê');
                assert.equal(lastMessage[0].name, 'Tyrion Lannister');
                assert.equal(lastMessage[0].picture, 'http://goo.gl/cHVI9H');
                assert.equal(lastMessage[0].email, 'tyrion@gmail.com');
            });
        });
    });
}
