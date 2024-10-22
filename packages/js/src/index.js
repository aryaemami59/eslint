/**
 * @fileoverview Main package entrypoint.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const all = require("./configs/eslint-all");
const recommended = require("./configs/eslint-recommended");

const configs = {
    all,
    recommended
};

module.exports = {
    configs
};
