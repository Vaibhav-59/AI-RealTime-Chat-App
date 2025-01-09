import socket from 'socket.io-client';


let socketInstance = null;

const VITE_API_URL='https://chat-app-backend-paex.onrender.com';
export const initializeSocket = (projectId) => {

    socketInstance = socket( VITE_API_URL, {
        auth: {
            token: localStorage.getItem('token')
        },
        query: {
            projectId
        }
    });

    return socketInstance;

}

export const receiveMessage = (eventName, cb) => {
    socketInstance.on(eventName, cb);
}

export const sendMessage = (eventName, data) => {
    socketInstance.emit(eventName, data);
}
