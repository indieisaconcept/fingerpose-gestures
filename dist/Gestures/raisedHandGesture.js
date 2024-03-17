"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe raisedHand gesture ✋
const raisedHandGesture = new GestureDescription('raised_hand');
for (let finger of [
    Finger.Thumb,
    Finger.Index,
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
]) {
    raisedHandGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    raisedHandGesture.addDirection(finger, FingerDirection.VerticalUp, 0.95);
    raisedHandGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.2);
    raisedHandGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.2);
}
// Thumb
raisedHandGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
raisedHandGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
exports.default = raisedHandGesture;
