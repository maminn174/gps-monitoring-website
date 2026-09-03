import { duts } from '@/page-data/datchiki-topliva.data'
import { temperatureSensors } from '@/page-data/datchiki-temperatury.data'
import { gpsBeacons } from '@/page-data/gps-mayaki.data'
import { gpsTrackers } from '@/page-data/gps-trackers.data'
import { personalTrackers } from '@/page-data/personalnye-trekery.data'
import {
  oborudovanieItems,
  resheniyaItems,
  uslugiItems,
} from '@/page-data/habs.data'

const productsToLinks = (products, baseHref) =>
  products.map(({ title, slug }) => ({
    label: title,
    href: `${baseHref}/${slug}`,
  }))

const productLinksByCategoryHref = {
  '/oborudovanie/gps-trekery-dlya-avtomobilya': productsToLinks(
    gpsTrackers,
    '/oborudovanie/gps-trekery-dlya-avtomobilya'
  ),
  '/oborudovanie/datchiki-urovnya-topliva': productsToLinks(
    duts,
    '/oborudovanie/datchiki-urovnya-topliva'
  ),
  '/oborudovanie/datchiki-kontrolya-temperatury': productsToLinks(
    temperatureSensors,
    '/oborudovanie/datchiki-kontrolya-temperatury'
  ),
  '/oborudovanie/gps-mayaki': productsToLinks(
    gpsBeacons,
    '/oborudovanie/gps-mayaki'
  ),
  '/oborudovanie/personalnye-trekery': productsToLinks(
    personalTrackers,
    '/oborudovanie/personalnye-trekery'
  ),
}

const equipmentChildren = oborudovanieItems.items.map(({ label, href }) => ({
  label,
  href,
  children: productLinksByCategoryHref[href],
}))

export const sitemapItems = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Услуги',
    href: '/uslugi',
    children: uslugiItems.items.map(({ label, href }) => ({ label, href })),
  },
  {
    label: 'Решения',
    href: '/resheniya',
    children: resheniyaItems.items.map(({ label, href }) => ({ label, href })),
  },
  {
    label: 'Оборудование',
    href: '/oborudovanie',
    children: equipmentChildren,
  },
  {
    label: 'О компании',
    href: '/company',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },
]
