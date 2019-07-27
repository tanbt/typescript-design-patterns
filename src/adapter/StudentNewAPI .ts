export interface NewStudent {
  student_id: number,
  name: String
}

export const getStudent = (): NewStudent[] => {
  return [
    {
      student_id: 1,
      name: "Tan"
    },
    {
      student_id: 2,
      name: "Bui"
    }
  ];
}