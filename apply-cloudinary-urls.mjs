/**
 * apply-cloudinary-urls.mjs
 * Reads cloudinary-urls.json and rewrites source files to use Cloudinary URLs.
 *
 * Run after upload-to-cloudinary.mjs:
 *   node apply-cloudinary-urls.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Load the URL map produced by the upload script ───────────────────────────
const urlMap = JSON.parse(
  readFileSync(path.join(__dirname, 'cloudinary-urls.json'), 'utf8')
);

// Shorthand helper — returns Cloudinary URL or null for failed uploads
const cld = (publicId) => {
  const url = urlMap[publicId];
  if (!url || url.startsWith('ERROR')) return null;
  return url;
};

// ── ServicesPage.jsx ─────────────────────────────────────────────────────────
{
  const file = path.join(__dirname, 'src/pages/ServicesPage.jsx');
  let src = readFileSync(file, 'utf8');

  // Remove all local MP4 / image imports (vid_*, hero_bg, img_*)
  src = src.replace(/^import vid\d+ from '@\/assets\/services\/vid_\d+\.mp4';\n/gm, '');
  src = src.replace(/^import heroBg from '@\/assets\/services\/hero_bg\.mp4';\n/gm, '');
  src = src.replace(/^import img\d+ from '@\/assets\/services\/img_\d+\.(png|jpg|jpeg)';\n/gm, '');

  // Add a single cloudinary URL constants block right after the last named import
  const cldBlock = `
// ── Cloudinary asset URLs (served from CDN) ──────────────────────────────────
const heroBg  = '${cld('hephy/services/hero_bg')}';
const vid52   = '${cld('hephy/services/vid_52')}';
const vid53   = '${cld('hephy/services/vid_53')}';
const vid54   = '${cld('hephy/services/vid_54')}';
const vid55   = '${cld('hephy/services/vid_55')}';
const vid56   = '${cld('hephy/services/vid_56')}';
const vid57   = '${cld('hephy/services/vid_57')}';
const vid58   = '${cld('hephy/services/vid_58')}';
const vid59   = '${cld('hephy/services/vid_59')}';
const vid60   = '${cld('hephy/services/vid_60')}';
const vid61   = '${cld('hephy/services/vid_61')}';
const vid62   = '${cld('hephy/services/vid_62')}';
const vid64   = '${cld('hephy/services/vid_64')}';
const vid65   = '${cld('hephy/services/vid_65')}';
const vid66   = '${cld('hephy/services/vid_66')}';
const vid67   = '${cld('hephy/services/vid_67')}';
const img1    = '${cld('hephy/services/img_1')}';
const img2    = '${cld('hephy/services/img_2')}';
const img3    = '${cld('hephy/services/img_3')}';
const img4    = '${cld('hephy/services/img_4')}';
const img5    = '${cld('hephy/services/img_5')}';
const img6    = '${cld('hephy/services/img_6')}';
const img7    = '${cld('hephy/services/img_7')}';
const img8    = '${cld('hephy/services/img_8')}';
const img9    = '${cld('hephy/services/img_9')}';
const img10   = '${cld('hephy/services/img_10')}';
const img11   = '${cld('hephy/services/img_11')}';
const img12   = '${cld('hephy/services/img_12')}';
const img13   = '${cld('hephy/services/img_13')}';
const img14   = '${cld('hephy/services/img_14')}';
const img15   = '${cld('hephy/services/img_15')}';
const img16   = '${cld('hephy/services/img_16')}';
// ─────────────────────────────────────────────────────────────────────────────
`;

  // Insert before COLLAGE_ITEMS const
  src = src.replace('const COLLAGE_ITEMS = [', cldBlock + 'const COLLAGE_ITEMS = [');

  // Replace /videos/* public paths with Cloudinary URLs (keep local fallback for oversized files)
  const videoMap = {
    "'/videos/convo2.mp4'":        cld('hephy/videos/convo2')        ? `'${cld('hephy/videos/convo2')}'`        : "'/videos/convo2.mp4'",
    "'/videos/ice.mp4'":           cld('hephy/videos/ice')           ? `'${cld('hephy/videos/ice')}'`           : "'/videos/ice.mp4'",
    "'/videos/necklace_shot.mp4'": cld('hephy/videos/necklace_shot') ? `'${cld('hephy/videos/necklace_shot')}'` : "'/videos/necklace_shot.mp4'",
    "'/videos/necklace_ad.mp4'":   cld('hephy/videos/necklace_ad')   ? `'${cld('hephy/videos/necklace_ad')}'`   : "'/videos/necklace_ad.mp4'",
    "'/videos/sample_1.mp4'":      cld('hephy/videos/sample_1')      ? `'${cld('hephy/videos/sample_1')}'`      : "'/videos/sample_1.mp4'",
    "'/videos/sample_2.mp4'":      cld('hephy/videos/sample_2')      ? `'${cld('hephy/videos/sample_2')}'`      : "'/videos/sample_2.mp4'",
    "'/videos/untitled.mp4'":      cld('hephy/videos/untitled')      ? `'${cld('hephy/videos/untitled')}'`      : "'/videos/untitled.mp4'",
  };
  for (const [from, to] of Object.entries(videoMap)) {
    src = src.replace(from, to);
  }

  writeFileSync(file, src, 'utf8');
  console.log('✓ Updated: src/pages/ServicesPage.jsx');
}

// ── Hero.jsx ─────────────────────────────────────────────────────────────────
{
  const file = path.join(__dirname, 'src/components/site/Hero.jsx');
  let src = readFileSync(file, 'utf8');

  src = src.replace(
    "import heroImage from '@/assets/hero-image.png';",
    `const heroImage = '${cld('hephy/assets/hero-image')}';`
  );

  writeFileSync(file, src, 'utf8');
  console.log('✓ Updated: src/components/site/Hero.jsx');
}

// ── Enquiry.jsx — /mascot/mascot2.png ───────────────────────────────────────
{
  const file = path.join(__dirname, 'src/components/site/Enquiry.jsx');
  let src = readFileSync(file, 'utf8');

  src = src.replace(
    '"/mascot/mascot2.png"',
    `"${cld('hephy/mascot/mascot2')}"`
  );

  writeFileSync(file, src, 'utf8');
  console.log('✓ Updated: src/components/site/Enquiry.jsx');
}

// ── CTABand.jsx — /mascot/mascot2.png ───────────────────────────────────────
{
  const file = path.join(__dirname, 'src/components/site/CTABand.jsx');
  let src = readFileSync(file, 'utf8');

  src = src.replace(
    '"/mascot/mascot2.png"',
    `"${cld('hephy/mascot/mascot2')}"`
  );

  writeFileSync(file, src, 'utf8');
  console.log('✓ Updated: src/components/site/CTABand.jsx');
}

console.log('\n✅ All source files updated with Cloudinary URLs.');
