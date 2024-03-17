"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe pinching gesture 🤏
const Gesture = new GestureDescription('pinching');
// thumb:
Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
// all other fingers:
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    Gesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
}
exports.default = Gesture;
