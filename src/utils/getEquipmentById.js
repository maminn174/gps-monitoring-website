import { equipments } from '@/page-data/equipments.data'

const getEquipmentById = (id, equipmentList = equipments) => {
  return equipmentList.find((equipment) => equipment.id === id)
}

export default getEquipmentById
