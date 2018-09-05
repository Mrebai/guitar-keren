import {Mongo} from 'meteor/mongo'

const message = new Mongo.Collection('message');

export default message