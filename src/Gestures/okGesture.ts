import fp from 'fingerpose';
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

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

export default Gesture;
