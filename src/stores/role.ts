import { defineStore } from "pinia"
export const useRoleStore = defineStore('role', {
    state: () => ({
        role: '' as string,
        name: '' as string,
        surname: '' as string,
        position: '' as string,
        studentID: '' as string,
        department: '' as string,
        image: '' as string
    }),
    actions: {
        updateRole(role: string) {
            this.role = role
        },
        updateProfile(
            name: string, 
            surname: string,  
            position: string,
            studentID: string,
            department: string,
            image: string){
            this.name = name
            this.surname = surname
            this.position = position
            this.department = department
            this.image = image
        },
        resetRole() {
            this.role = ''
        }
    }
})
    
