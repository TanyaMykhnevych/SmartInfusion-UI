export interface ITreatmentsList {
  treatments: Array<ITreatmentViewModel>;
}

export interface ITreatmentViewModel {
  id: number;
  diseaseHistoryId: number;
  medicineId: number;
  diagnosis: string;
  medicineWeight: string;
  solutionVolume: number;
  dosage: number;
  isCompleted: boolean;
  created: Date;
}