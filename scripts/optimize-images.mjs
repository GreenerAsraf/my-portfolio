import sharp from "sharp";
import { readdir, stat, access } from "fs/promises";
import path from "path";

const publicDir = path.resolve("public");

const pngTargets = [
  "skillbridge-snapshot.png",
  "caffora.png",
  "gks.png",
  "resale-here.png",
  "tecquest.png",
  "advoza.png",
  "learning-bee.png",
];

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimizeProfilePic() {
  const input = path.join(publicDir, "profile-pic.JPG");
  const output = path.join(publicDir, "profile-pic.webp");

  if (!(await fileExists(input))) {
    console.log(`profile-pic.JPG does not exist, skipping...`);
    return;
  }

  await sharp(input)
    .rotate()
    .resize(800, 1000, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);

  const { size } = await stat(output);
  console.log(`profile-pic.webp: ${(size / 1024).toFixed(1)} KB`);
}

async function optimizePngs() {
  for (const file of pngTargets) {
    const input = path.join(publicDir, file);
    const output = path.join(publicDir, file.replace(/\.png$/i, ".webp"));

    if (!(await fileExists(input))) {
      console.log(`${file} does not exist, skipping...`);
      continue;
    }

    await sharp(input)
      .webp({ quality: 82 })
      .toFile(output);

    const { size } = await stat(output);
    console.log(`${path.basename(output)}: ${(size / 1024).toFixed(1)} KB`);
  }
}

async function optimizePreloaderImage() {
  const input = path.join(publicDir, "Asraf.jpg");
  const output = path.join(publicDir, "Asraf.webp");

  if (!(await fileExists(input))) {
    console.log(`Asraf.jpg does not exist, skipping...`);
    return;
  }

  await sharp(input)
    .rotate()
    .resize(400, 400, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  const { size } = await stat(output);
  console.log(`Asraf.webp: ${(size / 1024).toFixed(1)} KB`);
}

await optimizeProfilePic();
await optimizePngs();
await optimizePreloaderImage();
console.log("Image optimization complete.");
