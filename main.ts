// Oruvane — a travel poster for a place that isn't there.
//
// main.ts copies the poster image (poster.png, shipped in this repo) to
// /output/entry.png, the artifact the house gate and judge read.
// It fails loudly rather than shipping an image the gate would refuse:
// the source must exist, be a whole PNG of exactly 1024x1024 pixels,
// and fit the 1 MiB cap.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1_048_576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "poster.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

if (!existsSync(source)) {
  fail(`poster image missing: ${source}`);
}

const bytes = readFileSync(source);
if (bytes.length > MAX_BYTES) {
  fail(`poster image is ${bytes.length} bytes, over the ${MAX_BYTES} byte cap`);
}
if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  fail("poster image is not a whole PNG (bad signature)");
}
// IHDR chunk: bytes 16-19 width, 20-23 height, big-endian.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  fail(`poster image is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
console.log(`wrote ${dest} (${bytes.length} bytes, ${width}x${height})`);
