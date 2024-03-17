"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe ok gesture 👌
const Gesture = new GestureDescription('ok');
// thumb:
Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);
// index:
Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
Gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75);
// Middle:
Gesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75);
// Gesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, .25);
// Ring:
Gesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Gesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
// Gesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, .25);
// Pinky:
Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
Gesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
// Gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, .25);
exports.default = Gesture;
