import { create } from 'zustand'

// import.meta.env.VITE_TOKEN
// import.meta.env.VITE_SOCKET_ENDPOINT

type mainStore = {
    count:number,

    token: string,
    socketEndpoint: string,
    loggedIn: boolean,
    user: {
      id: string,
      user_name: string,
      token: string
    },
    profileInfo: {
      avatar:string,
      email:string,
      Id: number,
      memberSince: string,
    },
    increment: ()=>void;
}


export const useMainStore = create<mainStore>((set) => ({

    count:0,

    //Auth
    token: process.env.VITE_TOKEN || '',
    socketEndpoint: process.env.VITE_SOCKET_ENDPOINT || '',
    loggedIn: false,
    user: {
      id: "0",
      user_name: "Default",
      token: ""
    },
    profileInfo: {
      avatar: "",
      email: "",
      Id: 0,
      memberSince: "",
    },

    increment:() =>{
        set((state)=>({ count: state.count+1}))
    },


}))