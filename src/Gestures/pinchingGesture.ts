import fp from 'fingerpose';
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

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

export default Gesture;
