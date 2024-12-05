import { useEffect } from "react";
import axios from "axios";

export default function useAssistChatGet(
    conversationId,
    setConversationId,
    setAssistHistory,
    members,
    setMembers,
    description,
    setDescription,
    messages,
    setMessages,
    pinnedMessages,
    setPinnedMessages,
    totalMessages,
    setTotalMessages,
    setError
) {
    useEffect(() => {
        console.log("Calling useAssistChatGet");
        
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8080/chat/${conversationId}`);
                return response.data;
            } catch (error) {
                setError("Error connecting to the backend.\n" + error);
            }
        }

        async function loadChatData() {
            const chatData = await fetchData();
            if (chatData) {
                setMembers(chatData.members);
                setDescription(chatData.description);
                setMessages(chatData.messages);
                setPinnedMessages(chatData.pinnedMessages);
                setTotalMessages(chatData.totalMessages);
            }
        }

        loadChatData();
    }, []);
}