import fb from 'fingerpose';
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fb;

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
raisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.5,
);
raisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalLeft,
  0.5,
);

export default raisedHandGesture;
