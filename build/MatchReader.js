"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
    }
    load() {
        this.reader().read();
        this.reader.data.map(this.mapRow);
    }
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5], // Type Assertion
            row[6]
        ];
    }
}
