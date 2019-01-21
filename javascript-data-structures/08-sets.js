// A set is a collection of unique elements, members, which are unordered in a set
// and can not occur in a set more than once

// The fundamental operations performed on creating new sets are:
// Union: Created by combining the members of one set with the members of another
// Intersection: Created by adding all the members of one set that also exist in a second
// Difference: Created by adding all the members of one set except those that also exist in a second set

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.size = size;
    this.difference = difference;
}
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos,1);
        return true;
    } else {
        return false;
    }
}
function show() {
    return this.dataStore;
}
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var member in this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}
function size() {
    return this.dataStore.length;
}
function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}


var names = new Set();
names.add("D");
names.add("J");
names.add("C");
names.add("M");
names.add("R");
if (names.add("M")) {
    console.log("M added")
} else {
    console.log("Can't add M, must already be in set");
}
console.log(names.show());
var removed = "M";
if (names.remove(removed)) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}
names.add("C");
console.log(names.show());
removed = "A";
if (names.remove(removed)) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}


var cis = new Set();
cis.add("M");
cis.add("C");
cis.add("J");
cis.add("R");
var dmp = new Set();
dmp.add("R");
dmp.add("C");
dmp.add("J");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());

var inter = cis.intersect(dmp);
console.log(inter.show());

var it = new Set();
it.add("C");
it.add("C");
it.add("J");
it.add("D");
it.add("J");
it.add("T");
it.add("R");
it.add("M");

if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
} else {
    console.log("DMP is not a subset of IT.");
}

var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]");


// OUTPUT
// Can't add M, must already be in set
// ['D', 'J', 'C', 'M', 'R']
// M removed
// ['D', 'J', 'C', 'R']
// A not removed
// ['M', 'C', 'J', 'R']
// ['C', 'J', 'R']
// DMP is not a subset of IT
// [M, C, J, R] difference [C, J, D, T, R, M] -> []
