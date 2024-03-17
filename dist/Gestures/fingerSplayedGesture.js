"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fingerpose_1 = __importDefault(require("fingerpose"));
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fingerpose_1.default;
// describe fingerSplayed gesture 🖐
const fingerSplayedGesture = new GestureDescription('finger_splayed');
for (let finger of [
    Finger.Thumb,
    Finger.Index,
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
]) {
    fingerSplayedGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}
// Thumb
fingerSplayedGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.7);
fingerSplayedGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.7);
// Index
fingerSplayedGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
fingerSplayedGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
// Middle
fingerSplayedGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);
fingerSplayedGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);
// Ring
fingerSplayedGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);
fingerSplayedGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75);
// Pinky
fingerSplayedGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
fingerSplayedGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);
exports.default = fingerSplayedGesture;
