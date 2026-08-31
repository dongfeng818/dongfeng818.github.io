import { basicsEn } from './basics/en.js';
import { basicsEs } from './basics/es.js';
import { basicsFr } from './basics/fr.js';
import { basicsZh } from './basics/zh.js';
import { wellnessEn } from './wellness/en.js';
import { wellnessEs } from './wellness/es.js';
import { wellnessFr } from './wellness/fr.js';
import { wellnessZh } from './wellness/zh.js';

export const basics = { en: basicsEn, es: basicsEs, fr: basicsFr, zh: basicsZh };
export const wellness = { en: wellnessEn, es: wellnessEs, fr: wellnessFr, zh: wellnessZh };

// 板块元信息（图标用的汉字）
export const basicsGlyphs = {
  'yin-yang': '阴',
  'five-elements': '行',
  'qi-blood-fluids': '气',
  'zang-fu-organs': '脏',
  meridians: '经',
  'tongue-pulse': '诊',
};

export const wellnessGlyphs = {
  'food-energetics': '食',
  'seasonal-living': '时',
  'sleep-energy': '眠',
  'acupressure-basics': '按',
  'tea-and-herbs': '茶',
};

export function findArticle(section, locale, slug) {
  const list = section === 'basics' ? basics : wellness;
  return (list[locale] ?? list.en).find((a) => a.slug === slug) ?? null;
}
