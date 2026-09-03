let equipmentsPromise = null

const loadEquipments = () => {
  if (!equipmentsPromise) {
    equipmentsPromise = import('@/page-data/equipments.data').then(
      ({ equipments }) => equipments
    )
  }

  return equipmentsPromise
}

export default loadEquipments
