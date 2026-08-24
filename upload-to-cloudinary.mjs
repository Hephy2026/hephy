/**
 * upload-to-cloudinary.mjs
 * Uploads all large images and videos to Cloudinary and prints a mapping
 * of local path → Cloudinary URL for use in source code.
 *
 * Run: node upload-to-cloudinary.mjs
 */

import { v2 as cloudinary } from 'cloudinary';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: 'fkmi7uzw',
  api_key:    '694781266884274',
  api_secret: 'HEPky3A-w-oMEl8Gf3fUX9rS_dE',
});

// ── Assets to upload ────────────────────────────────────────────────────────
// Each entry: { localPath, publicId, resourceType }
const ASSETS = [
  // ── public/videos (large, served from /videos/*) ──
  { localPath: 'public/videos/convo2.mp4',        publicId: 'hephy/videos/convo2',        resourceType: 'video' },
  { localPath: 'public/videos/ice.mp4',           publicId: 'hephy/videos/ice',           resourceType: 'video' },
  { localPath: 'public/videos/necklace_shot.mp4', publicId: 'hephy/videos/necklace_shot', resourceType: 'video' },
  { localPath: 'public/videos/necklace_ad.mp4',   publicId: 'hephy/videos/necklace_ad',   resourceType: 'video' },
  { localPath: 'public/videos/sample_1.mp4',      publicId: 'hephy/videos/sample_1',      resourceType: 'video' },
  { localPath: 'public/videos/sample_2.mp4',      publicId: 'hephy/videos/sample_2',      resourceType: 'video' },
  { localPath: 'public/videos/untitled.mp4',      publicId: 'hephy/videos/untitled',      resourceType: 'video' },

  // ── public/mascot images ──
  { localPath: 'public/mascot/mascot2.png',  publicId: 'hephy/mascot/mascot2',  resourceType: 'image' },
  { localPath: 'public/mascot/hero.png',     publicId: 'hephy/mascot/hero',     resourceType: 'image' },
  { localPath: 'public/mascot/peek.png',     publicId: 'hephy/mascot/peek',     resourceType: 'image' },
  { localPath: 'public/mascot/thumbsup.png', publicId: 'hephy/mascot/thumbsup', resourceType: 'image' },

  // ── src/assets large images ──
  { localPath: 'src/assets/hero-image.png', publicId: 'hephy/assets/hero-image', resourceType: 'image' },
  { localPath: 'src/assets/mascot2.png',    publicId: 'hephy/assets/mascot2',    resourceType: 'image' },

  // ── src/assets/services hero_bg ──
  { localPath: 'src/assets/services/hero_bg.mp4', publicId: 'hephy/services/hero_bg', resourceType: 'video' },

  // ── src/assets/services vid_* (gallery/collage videos) ──
  { localPath: 'src/assets/services/vid_52.mp4', publicId: 'hephy/services/vid_52', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_53.mp4', publicId: 'hephy/services/vid_53', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_54.mp4', publicId: 'hephy/services/vid_54', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_55.mp4', publicId: 'hephy/services/vid_55', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_56.mp4', publicId: 'hephy/services/vid_56', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_57.mp4', publicId: 'hephy/services/vid_57', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_58.mp4', publicId: 'hephy/services/vid_58', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_59.mp4', publicId: 'hephy/services/vid_59', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_60.mp4', publicId: 'hephy/services/vid_60', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_61.mp4', publicId: 'hephy/services/vid_61', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_62.mp4', publicId: 'hephy/services/vid_62', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_64.mp4', publicId: 'hephy/services/vid_64', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_65.mp4', publicId: 'hephy/services/vid_65', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_66.mp4', publicId: 'hephy/services/vid_66', resourceType: 'video' },
  { localPath: 'src/assets/services/vid_67.mp4', publicId: 'hephy/services/vid_67', resourceType: 'video' },

  // ── src/assets/services images (used in gallery/collage) ──
  { localPath: 'src/assets/services/img_1.png',  publicId: 'hephy/services/img_1',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_2.png',  publicId: 'hephy/services/img_2',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_3.jpg',  publicId: 'hephy/services/img_3',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_4.jpg',  publicId: 'hephy/services/img_4',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_5.jpg',  publicId: 'hephy/services/img_5',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_6.jpg',  publicId: 'hephy/services/img_6',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_7.jpg',  publicId: 'hephy/services/img_7',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_8.jpg',  publicId: 'hephy/services/img_8',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_9.jpg',  publicId: 'hephy/services/img_9',  resourceType: 'image' },
  { localPath: 'src/assets/services/img_10.jpg', publicId: 'hephy/services/img_10', resourceType: 'image' },
  { localPath: 'src/assets/services/img_11.jpg', publicId: 'hephy/services/img_11', resourceType: 'image' },
  { localPath: 'src/assets/services/img_12.jpg', publicId: 'hephy/services/img_12', resourceType: 'image' },
  { localPath: 'src/assets/services/img_13.jpg', publicId: 'hephy/services/img_13', resourceType: 'image' },
  { localPath: 'src/assets/services/img_14.jpg', publicId: 'hephy/services/img_14', resourceType: 'image' },
  { localPath: 'src/assets/services/img_15.jpg', publicId: 'hephy/services/img_15', resourceType: 'image' },
  { localPath: 'src/assets/services/img_16.jpg', publicId: 'hephy/services/img_16', resourceType: 'image' },
];

// ── Helper ───────────────────────────────────────────────────────────────────
function cldUrl(publicId, resourceType, ext = '') {
  const base = `https://res.cloudinary.com/fkmi7uzw`;
  const type = resourceType === 'video' ? 'video' : 'image';
  return `${base}/${type}/upload/${publicId}${ext}`;
}

async function uploadAsset(asset) {
  const absPath = path.join(__dirname, asset.localPath);
  try {
    // Check if already uploaded (avoid re-uploading)
    try {
      const existing = await cloudinary.api.resource(asset.publicId, { resource_type: asset.resourceType });
      console.log(`  ✓ already exists: ${asset.publicId}`);
      return { ...asset, url: existing.secure_url, skipped: true };
    } catch (_) {
      // Not found — proceed to upload
    }

    console.log(`  ↑ uploading: ${asset.localPath} …`);
    const result = await cloudinary.uploader.upload(absPath, {
      public_id: asset.publicId,
      resource_type: asset.resourceType,
      overwrite: false,
      use_filename: false,
    });
    console.log(`  ✓ done:      ${result.secure_url}`);
    return { ...asset, url: result.secure_url };
  } catch (err) {
    console.error(`  ✗ failed:    ${asset.localPath} — ${err.message}`);
    return { ...asset, url: null, error: err.message };
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🌤  Cloudinary upload — hephy-vite\n');

  const results = [];
  for (const asset of ASSETS) {
    const r = await uploadAsset(asset);
    results.push(r);
  }

  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('  UPLOAD RESULTS  (paste into cloudinary-urls.json)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const mapping = {};
  for (const r of results) {
    if (r.url) mapping[r.publicId] = r.url;
    else       mapping[r.publicId] = `ERROR: ${r.error}`;
  }
  console.log(JSON.stringify(mapping, null, 2));

  // Write results to a JSON file for reference
  import('fs').then(({ writeFileSync }) => {
    writeFileSync(
      path.join(__dirname, 'cloudinary-urls.json'),
      JSON.stringify(mapping, null, 2),
    );
    console.log('\n✅ Written to cloudinary-urls.json');
  });
}

main().catch(console.error);
