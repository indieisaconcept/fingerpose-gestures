import fp from 'fingerpose';
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

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

export default Gesture;
