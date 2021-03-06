let { developers } = require('../data/developers.data');
const { Developer } = require('../models/Developer');

class developerController {
  findOne(id) {
    return developers.find(({id: dId}) => dId === +id);
  }

  findAll() {
    return developers;
  }

  create(name, surname, experience, mode) {
    const developer = new Developer(name, surname, experience, mode);

    developers.push(developer);
    return developer;
  }

  updateOne(id, {name, surname, experience}) {
    const developer = this.findOne(id);

    developer.name = name || developer.name;
    developer.surname = surname || developer.surname;
    developer.experience = experience || developer.experience;
    return developer;
  }

  deleteOne(id) {
    const index = developers.findIndex(c => c.id === id);
    developers.splice(index, 1);
  }

  deleteAll() {
    developers = [];
  }
}

exports.developerController = new developerController();