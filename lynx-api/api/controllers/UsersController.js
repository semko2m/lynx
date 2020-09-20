/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * find
   * @param req
   * @param res
   * @returns {Promise<*|Promise<any>>}
   */
  search: async function (req, res) {
    sails.log.info(req.query);
    if (req.query.startDate && req.query.endDate) {
      let users;
      try {
        users = await Users.find({
          createdAt: {'>': new Date(req.query.startDate), '<': new Date(req.query.endDate)}
        });
        return res.json(users);
      } catch (e) {
        return res.json({
          Error: 'Is not valid'
        });
      }

    } else {
      return res.json({
        Error: 'Start and end date is not provided'
      });
    }

  }
};

