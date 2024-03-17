type IGesture = {
    name: string;
    confidence: number;
};
declare const bestMatch: (gestures: IGesture[]) => IGesture | null;
export { bestMatch };
