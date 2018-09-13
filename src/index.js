class Sorter {

  constructor() {
    this.elements = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    let arrTemp = [];
    indices.sort(function(a, b) {
      return a - b;
    });

    for (let value of indices){
      arrTemp.push(this.elements[value]);
    }

    arrTemp.sort(this.comparator);

    let i = 0;
    for (let value of indices){
      this.elements[value] = arrTemp[i];
      i++;
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}


module.exports = Sorter;