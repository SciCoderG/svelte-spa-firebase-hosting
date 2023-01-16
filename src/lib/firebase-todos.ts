import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

export const todoCollection = collection(db, 'Todos');

export async function addTodo(uid:string, title: string, description: string) {
	console.log(`Trying to add todo: ${title}`);
	console.log(`For user: ${uid}`);
	try {
		const newTodo = await addDoc(todoCollection, {
			title: title,
			description: description,
			isDone: false,
			uid: uid
		});
	} catch (error) {
        console.log(`Error when adding todos: ${error}`);
    }
}
