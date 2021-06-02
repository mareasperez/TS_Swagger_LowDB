export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Task API',
            version: '1.0.0',
            description: 'A simple swagger implementation'
        },
        servers: [
            {
                url:'http://localhost:3000'
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}