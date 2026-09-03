import { gpsTrackers } from '@/page-data/gps-trackers.data'
import { duts } from '@/page-data/datchiki-topliva.data'
import { temperatureSensors } from '@/page-data/datchiki-temperatury.data'
import { gpsBeacons } from '@/page-data/gps-mayaki.data'
import { personalTrackers } from '@/page-data/personalnye-trekery.data'

export const equipments = [
  ...gpsTrackers,
  ...gpsBeacons,
  ...personalTrackers,
  ...duts,
  ...temperatureSensors,
]
