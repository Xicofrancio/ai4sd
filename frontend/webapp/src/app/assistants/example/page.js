import styles from "@/app/page.module.css";
import Image from "next/image";

import 'bootstrap/dist/css/bootstrap.css';
import '@/app/globals.css';

import AssistantPicker from "@/app/components/assistantPicker";
import AssistantHistory from "@/app/components/assistantHistory";
import Assistant from "./components/assistant";

export default function Interactor() {
    //preparing mock data
    const assistName = "YOUR ASSISTANT";
    const assistType = "req"; // change according to the assistant type (req, arch, refact, verif)
    const assistHistory = prepareMockHistory();


    return (
        <div className={styles.interactorLayout}>
            <AssistantPicker />
            <AssistantHistory name={assistName} type={assistType} interactions={assistHistory}/>
            <Assistant />
        </div>
    )
}

function prepareMockHistory() {
    const history = [];
    for (let i = 1; i <= 20; i++) {
        const chat = { text: `Chat ${i}`, link: "#" };
        history.push(chat);
    }
    return history;
}
