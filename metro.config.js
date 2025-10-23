const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  'obj',
  'mtl',
  'JPG',
  'vrx',
  'hdr',
  'gltf',
  'glb',
  'bin',
  'arobject',
  'gif'
);

module.exports = config;
