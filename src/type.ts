export interface StudentType {
    id: number
    studentID: string
    name: string
    surname: string
    img: string
    course: Array<string>
    teacherName: string
    teacherSurname: string
    teacherimgLink: string
    comment: string
    reply: string
    fileDesc: string
    file: Blob
    department: string
}