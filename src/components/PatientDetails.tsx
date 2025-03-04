import { Patient } from '../types'
import { PatientDetailItem } from './PatientDetailItem'

interface Props {
  patient: Patient
}

export const PatientDetails = ({ patient }: Props) => {
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailItem
        label='id'
        value={patient.id}
      />

      <PatientDetailItem
        label='nombre'
        value={patient.name}
      />

      <PatientDetailItem
        label='propietario'
        value={patient.caretaker}
      />

      <PatientDetailItem
        label='email'
        value={patient.email}
      />

      <PatientDetailItem
        label='fecha alta'
        value={patient.date.toString()}
      />

      <PatientDetailItem
        label='síntomas'
        value={patient.symptoms}
      />

      <div className='flex justify-between mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
          Editar
        </button>
      </div>
    </div>
  )
}
