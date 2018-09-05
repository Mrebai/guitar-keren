import {Mongo} from 'meteor/mongo'

const posts = new Mongo.Collection('Post');

export default posts