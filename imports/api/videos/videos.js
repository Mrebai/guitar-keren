import {Mongo} from 'meteor/mongo'

const videos = new Mongo.Collection('videos');

export default videos