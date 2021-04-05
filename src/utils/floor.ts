export default function floor(n: number, precision = 2): number {
    const multiplier = Math.pow(10, precision);
    return Math.floor(n * multiplier) / multiplier;
}