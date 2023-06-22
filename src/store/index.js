import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";
trainerName
export default configureStore({
    reducer:{
        trainerName
    }
})