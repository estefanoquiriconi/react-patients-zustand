import { create } from 'zustand'
import { DraftPatient, Patient } from './types'
import { devtools } from 'zustand/middleware'

interface PatientState {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (date: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {
    id: crypto.randomUUID(),
    ...patient,
  }
}

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],

    activeId: '',

    addPatient: (data) => {
      const newPatient = createPatient(data)
      set((state) => ({
        patients: [...state.patients, newPatient],
      }))
    },

    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }))
    },

    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }))
    },
  }))
)
