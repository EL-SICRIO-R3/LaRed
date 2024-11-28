

export interface ITarea{
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export const tareas: ITarea[] = [
    {
        id: 1,
        title: "Ensayo",
        description: "Se realiza un ensayo de prueba",
        completed: true
    },
    {
        id: 2,
        title: "Tarea",
        description: "Se realiza una tarea de prueba",
        completed: false
    },
    {
        id: 3,
        title: "Proyecto final",
        description: "Se realiza un proyecto final de prueba",
        completed: false
    }
]