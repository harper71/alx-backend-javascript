export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;

    // eslint-disable-next-line no-restricted-globals
    if (typeof length !== 'number' || isNaN(length)) {
      throw new TypeError('Length must be a number');
    }

    this._length = length;

    if (!Array.isArray(students) && typeof students !== 'string') {
      throw new TypeError('Expected students to be an array of strings or a string');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // setter and getter for  length

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }
  // setter and getter for students

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
