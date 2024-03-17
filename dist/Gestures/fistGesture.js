"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe oncoming fist gesture 👊
const Gesture = new GestureDescription('fist');
// thumb:
Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);
// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    Gesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    // Gesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    // Gesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}
exports.default = Gesture;
