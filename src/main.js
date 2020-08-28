import App from './App.svelte';
import * as firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp();
const app = new App({
	target: document.body,
	props: {
		firebaseApp: firebaseApp
	}
});

window.app = app;

export default app;