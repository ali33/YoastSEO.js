"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A function that only returns an empty that can be used as an empty marker
 *
 * @returns {Array} A list of empty marks.
 */
var emptyMarker = function () {
    return [];
};
var AssessmentResult = (function () {
    function AssessmentResult(_a) {
        var _b = _a.score, score = _b === void 0 ? 0 : _b, _c = _a.text, text = _c === void 0 ? "" : _c;
        this.score = 0;
        this._hasScore = false;
        this._identifier = "";
        this._hasMarks = false;
        this._marker = emptyMarker;
        this.text = "";
        this.score = score;
        this.text = text;
    }
    /**
     * Check if a score is available.
     * @returns {boolean} Whether or not a score is available.
     */
    AssessmentResult.prototype.hasScore = function () {
        return this._hasScore;
    };
    /**
     * Get the available score
     * @returns {number} The score associated with the AssessmentResult.
    */
    AssessmentResult.prototype.getScore = function () {
        return this.score;
    };
    /**
     * Set the score for the assessment.
     * @param {number} score The score to be used for the score property
     * @returns {void}
     */
    AssessmentResult.prototype.setScore = function (score) {
        this.score = score;
        this._hasScore = true;
    };
    ;
    /**
     * Check if a text is available.
     * @returns {boolean} Whether or not a text is available.
     */
    AssessmentResult.prototype.hasText = function () {
        return this.text !== "";
    };
    /**
     * Get the available text
     * @returns {string} The text associated with the AssessmentResult.
     */
    AssessmentResult.prototype.getText = function () {
        return this.text;
    };
    /**
     * Set the text for the assessment.
     * @param {string} text The text to be used for the text property
     * @returns {void}
     */
    AssessmentResult.prototype.setText = function (text) {
        this.text = text;
    };
    /**
     * Sets the identifier
     *
     * @param {string} identifier An alphanumeric identifier for this result.
     * @returns {void}
     */
    AssessmentResult.prototype.setIdentifier = function (identifier) {
        this._identifier = identifier;
    };
    /**
     * Gets the identifier
     *
     * @returns {string} An alphanumeric identifier for this result.
     */
    AssessmentResult.prototype.getIdentifier = function () {
        return this._identifier;
    };
    /**
     * Sets the marker, a pure function that can return the marks for a given Paper
     *
     * @param {Function} marker The marker to set.
     * @returns {void}
     */
    AssessmentResult.prototype.setMarker = function (marker) {
        this._marker = marker;
    };
    ;
    /**
     * Returns whether or not this result has a marker that can be used to mark for a given Paper
     *
     * @returns {boolean} Whether or this result has a marker.
     */
    AssessmentResult.prototype.hasMarker = function () {
        return this._hasMarks && this._marker !== emptyMarker;
    };
    ;
    /**
     * Gets the marker, a pure function that can return the marks for a given Paper
     *
     * @returns {Function} The marker.
     */
    AssessmentResult.prototype.getMarker = function () {
        return this._marker;
    };
    ;
    /**
     * Sets the value of _hasMarks to determine if there is something to mark.
     *
     * @param {boolean} hasMarks Is there something to mark.
     * @returns {void}
     */
    AssessmentResult.prototype.setHasMarks = function (hasMarks) {
        this._hasMarks = hasMarks;
    };
    ;
    /**
     * Returns the value of _hasMarks to determine if there is something to mark.
     *
     * @returns {boolean} Is there something to mark.
     */
    AssessmentResult.prototype.hasMarks = function () {
        return this._hasMarks;
    };
    ;
    return AssessmentResult;
}());
exports.default = AssessmentResult;
