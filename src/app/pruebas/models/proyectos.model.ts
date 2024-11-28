export const proyectos: IProyecto[] = [
    {
        id: 1,
        name: "Tbala Filtro",
        url: "filtrar",
        description: "Se listan datos y se agrega un filtro con pipe",
        porcent: 100
    },
    {
        id: 2,
        name: "Contador",
        url: "contador",
        description: "Se genera un contador con buttons y directivas de atributo",
        porcent: 100
    },
    {
        id: 3,
        name: "Login",
        url: "login",
        description: "Se genera un login y se valida mediante el formulario",
        porcent: 100
    },
    {
        id: 4,
        name: "Peticiones HTTP",
        url: "peticiones",
        description: "Se genera un listado con datos traidos con una peticion HTTP",
        porcent: 100
    },
    {
        id: 5,
        name: "Navegación",
        url: "navegacion",
        description: "Uso de directivas para naegar entre compoenntes",
        porcent: 100
    },
    {
        id: 6,
        name: "Traeas",
        url: "tareas",
        description: "Registro de tareas con directivas y emiters",
        porcent: 80
    }
]


export interface IProyecto{
    id: number;
    name: string;
    url: string;
    description: string;
    porcent: number;
}