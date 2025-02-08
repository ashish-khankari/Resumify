import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {
    const [getText, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [taskkToEditID, setTaskToEditID] = useState('');

    const handleText = (text) => {
        setText(text);
    };

    const getTasks = async () => {
        const getTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(getTasks))
    }
    useEffect(() => {
        getTasks();
    }, [tasks]);

    const createTask = async (newTask) => {
        const taskObj = {
            id: Date.now(),
            task: newTask,
        };

        const updatedTasks = [...tasks, taskObj];
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
            setText('');
        } catch (error) {
            console.log('error', error);
        };


    };

    const deleteTask = (taskID) => {
        const filterTasks = tasks.filter(item => item.id !== taskID);
        const setDeletedTasks = AsyncStorage.setItem('tasks', JSON.stringify(filterTasks));
        setTasks(setDeletedTasks);
    };

    const editTasks = (taskID, task) => {
        setTaskToEditID(taskID)
    }

    const renderTasks = ({ item }) => {
        const TASK = item?.task;
        const TASK_ID = item?.id;
        return (
            <View style={styles.tasksContainer}>
                {
                    taskkToEditID == TASK_ID ?
                        <TextInput placeholder='Update Task' placeholderTextColor={'black'} style={styles.placeholderContainer} onChangeText={text => handleUpdateTask(text)} /> :
                        <>
                            <Text>{TASK}</Text>
                            <View style={styles.buttonContainer}>

                                <TouchableOpacity style={styles.button} onPress={() => deleteTask(TASK_ID)}>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => editTasks(TASK_ID, TASK)}>
                                    <Text>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }

            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.createTaskContainer}>
                <TextInput placeholder='Create Task' value={getText} placeholderTextColor={'black'} style={styles.placeholderContainer} onChangeText={text => handleText(text)} />
                <TouchableOpacity onPress={() => createTask(getText)}>
                    <Text>Add Task</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={tasks} renderItem={renderTasks} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.contentContainerStyle} />
        </View>
    )
}

export default TodoListScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: "100%",
        width: '100%'
    },
    placeholderContainer: {
        color: 'black',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        flex: 1
    },
    createTaskContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        marginTop: 20,
        marginHorizontal: 20
        // height: 150
    },
    tasksContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contentContainerStyle: {
        marginHorizontal: 20,
        gap: 10
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 20
    },
    button: {
        height: 20,
        width: 50,
        backgroundColor: "lightgrey",
        alignItems: "center",
        justifyContent: 'center',
        // padding: 10
    }
});

