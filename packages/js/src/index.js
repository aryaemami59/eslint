/**
 * @fileoverview Main package entrypoint.
 * @author Nicholas C. Zakas
 */

"use strict";

const { name, version } = require("../package.json");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const all = require("./configs/eslint-all");
const recommended = require("./configs/eslint-recommended");

const configs = {
    all,
    recommended
};

const meta = {
    name,
    version
};

module.exports = {
    meta,
    configs
};
