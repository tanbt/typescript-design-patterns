export interface Student {
  id: number,
  name: String
}

export const getStudent = (): Student[] => {
  return [
    {
      id: 1,
      name: "Tan"
    },
    {
      id: 2,
      name: "Bui"
    }
  ];
}