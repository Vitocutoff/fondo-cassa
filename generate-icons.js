import sharp from "sharp";
import fs from "fs";

// File sorgente (quello che hai caricato)
const inputFile = "assets/icon.png";

// Cartella di output
const outputDir = "public/icons";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Dimensioni richieste
const sizes = [16, 32, 48, 64, 128, 192, 256, 384, 512];

// Genera PNG multipli
(async () => {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .toFile(`${outputDir}/icon-${size}.png`);
    console.log(`✔ Generated icon-${size}.png`);
  }

  // Favicon ICO (16, 32, 48)
  await sharp(inputFile)
    .resize(48, 48)
    .toFile(`${outputDir}/favicon-48.png`);
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(`${outputDir}/favicon-32.png`);
  await sharp(inputFile)
    .resize(16, 16)
    .toFile(`${outputDir}/favicon-16.png`);

  await sharp({
    create: {
      width: 48,
      height: 48,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: `${outputDir}/favicon-16.png` },
      { input: `${outputDir}/favicon-32.png` },
      { input: `${outputDir}/favicon-48.png` },
    ])
    .toFile(`${outputDir}/favicon.ico`);

  console.log("🎉 All icons generated!");
})();
