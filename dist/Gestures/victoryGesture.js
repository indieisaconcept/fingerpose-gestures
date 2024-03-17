"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe victory gesture ✌️
const victoryDescription = new GestureDescription('victory');
// thumb:
victoryDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
victoryDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
victoryDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
victoryDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// index:
victoryDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
victoryDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// middle:
victoryDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
victoryDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);
// ring:
victoryDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
victoryDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
victoryDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
victoryDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);
// pinky:
victoryDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
victoryDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
victoryDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
victoryDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);
exports.default = victoryDescription;
