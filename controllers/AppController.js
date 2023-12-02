// App controller
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  static async getStatus(request, response) {
    const usersNum = await dbClient.nbUsers();
    const fileNum = await dbClient.nbFiles();
    response.status(200).json({ users: userNum, files: fileNum });
  }
}

module.exports = AppController;
