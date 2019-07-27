Previous:
* The demo app: prints list of Student{id, name}
* Student API: provide list of Student{id, name}
* Printer: print a Student{id, name)}

After:
* Student New API: provide list of Student{student_id, name}
* Printer adapter: wrap Printer and convert it to work with `student_id` field

=>
* Old `Printer` is preserved.
*Little change from demo app