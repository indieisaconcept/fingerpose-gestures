import fp from 'fingerpose';
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

// describe oncoming fist gesture 👊
const Gesture = new GestureDescription('oncoming_fist');

// thumb:
Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.4);

// index:
Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
Gesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.4);

// Middle:

Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// Ring:
Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// Pinky:
Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default Gesture;
