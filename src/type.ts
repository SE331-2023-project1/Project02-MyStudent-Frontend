export interface StudentType {
    id: number
    studentID: string
    name: string
    surname: string
    image: string
    course: Array<string>
    advisorName: string
    advisorSurname: string
    advisorImage: string
    comment: string
    reply: string
    fileDesc: string
    file: Blob
    department: string
    role: String
    position: String
}