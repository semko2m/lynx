/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
      isInteger: true
    },
    firstName: {type: 'string'},

    lastName: {type: 'string'},

    haveChildrens: {type: 'boolean'},

    fullAddress: {type: 'string'},

    numberOfChildrens: {
      type: 'number',
      allowNull: true
    }
  },

};

