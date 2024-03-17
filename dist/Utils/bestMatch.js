"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestMatch = void 0;
const bestMatch = (gestures) => {
    if (gestures.length > 0) {
        const confidence = gestures.map(g => g.confidence);
        const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
        return gestures[maxConfidence];
    }
    else {
        return null;
    }
};
exports.bestMatch = bestMatch;
