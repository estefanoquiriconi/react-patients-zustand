import { create } from 'zustand'
import { DraftPatient, Patient } from './types'

interface PatientState {
  patients: Patient[]
  addPatient: (date: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {
    id: crypto.randomUUID(),
    ...patient,
  }
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient],
    }))
  },
}))
