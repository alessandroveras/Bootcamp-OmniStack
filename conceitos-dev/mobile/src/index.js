import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity  } from "react-native";

import api from "./services/api"

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("projects").then(response => {
            // console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post("projects", {
            title: `Novo projeto ${Date.now()}`,
            owner: "Alessandro Veras"
        });

        const project = response.data;
        setProjects([...projects, project ])
    }
    
    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            
            <SafeAreaView style={styles.container}> 
            
            <FlatList 
                // style={styles.container}
                data={projects}  //precisa ser um vetor
                keyExtractor={project => project.id} // retorna valor unico
                renderItem={({ item: project }) => (  //propriedade item retorna o conteudo da lista
                    <Text style={styles.containerProject} >{project.title}</Text>
                )}
            />
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>
            
            </SafeAreaView>
            

            {/* <View style={styles.container}>            
                {/* <Text style={styles.containerProject}>Hello GoStack</Text> }
                {projects.map(project => (
                    <Text style={styles.containerProject} key={project.id}>{project.title}</Text>
                ))}
            </View> */}
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#7159c1",
        // justifyContent: "center",
        // alignItems: "center"
    },
    containerProject: {
        color: "#FFF",
        fontSize: 20,
        // fontWeight: "bold"
    },
    button: {
        backgroundColor: "#FFF",
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
    },    
});

