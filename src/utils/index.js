export const getNewTaskObject = () => {
    return {
        id: String(new Date().getTime()),
        name: '',
        count: 1
    }
}