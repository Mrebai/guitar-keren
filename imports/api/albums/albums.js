import {Mongo} from 'meteor/mongo'

const albums = new Mongo.Collection('albums');

export default albums