import {Request, Response} from "express";
import createUser from "./services/CreateUser";


export function helloWorld(request: Request, response: Response) {

    const user = createUser({
        email: "alessandro.veras@gmail.com",
        password: "tim@123",
        techs: [
            "Node.js",
            "ReactJS",
            "React Native",
            { title: "JavaScript", experience: 100 },
        ],
    });

    console.log(user)
    
    return response.json({ message: "Hello World", user: user });
    
}