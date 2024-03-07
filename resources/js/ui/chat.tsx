import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMessage, AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { routeApi } from '@/axiosConfig';
import { toast } from 'react-toastify';
interface messageTs{
    user_id: number,
    session: string,
    conversations: {
        message: string,
        chat_id: number,
        user: string
    }[]
}
const ChatComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const sessionChat = useRef('');
    const [chat, setChat] = useState<messageTs>();
    const messagesEndRef = useRef(null);
    const { RouteGet, RoutePost } = routeApi();
    const chatUserType = useRef('')

    useEffect(() => {
        if (localStorage.getItem('chatSession')) {
            sessionChat.current = localStorage.getItem('chatSession') || '';
        }
    }, []);

    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        chatUserType.current = localStorage.getItem('chatUser') || ''
    }, [chat, isOpen]);

    useEffect(()=>{
        window.Echo.channel(`Chat.${sessionChat.current}`)
        .listen('.chat.conversation', (e:any) => {
            console.log(e);
            setChat({...e.data})
        });
    },[])

    const toggleChat = async () => {
        if(!isOpen){
            await RouteGet(`/en/new-chat/${localStorage.getItem('chatSession')||''}`)
            .then((response: {data: {session:string,user: string,data:messageTs}}) => {
                if(!localStorage.getItem('chatUser')){
                    localStorage.setItem('chatUser',response.data.user)
                }
                localStorage.setItem('chatSession',response.data.session)
                sessionChat.current = response.data.session
                setChat({...response.data.data})
            }).catch((err) => {
                console.log(err);
            });
        }
        setIsOpen(!isOpen)
    };

    const handleMessageChange = (e:any) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = (e:any) => {
        e.preventDefault();
        RoutePost(`/en/chat-conversation/${sessionChat.current}`,{message: message,session: sessionChat.current,user:localStorage.getItem('chatUser')})
        setMessage('');
        setMessage('');
    };

    const handleEndChat = () => {
        RoutePost(`/en/chat-end`,{session:sessionChat.current})
        .then((response) => {
            if(response.data.type == 'success'){
                localStorage.removeItem('chatSession')
                localStorage.removeItem('chatUser')
                toast.success(response.data.message,{position: 'top-right'})
            }
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            setIsOpen(false);
        });

    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-80 md:w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col"
                >
                    <div className="p-4  bg-[--buttonsColor] text-white rounded-t-lg font-bold flex justify-between items-center">
                        Chat em Tempo Real
                        <button onClick={handleEndChat} className="text-sm bg-red-500 hover:bg-red-700 rounded px-2 py-1">Terminar Chat</button>
                        <button onClick={toggleChat} className="text-sm">X</button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
                        {chat?.conversations.map((msg,index) => (
                            <div key={index} className={`flex flex-col ${msg.user != chatUserType.current ? "items-end" : "items-start"}`}>
                                <div className={`max-w-xs px-4 py-2 my-2 rounded-lg ${msg.user != chatUserType.current ? "bg-blue-100 text-gray-800" : "bg-gray-200 text-gray-900"}`}>
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="p-2 flex items-center">
                        <input
                            type="text"
                            className="flex-1 p-2 border text-gray-600 border-gray-300 rounded-lg mr-2"
                            placeholder="Digite sua mensagem..."
                            value={message}
                            onChange={handleMessageChange}
                        />
                        <button
                            type="submit"
                            className=" bg-[--buttonsColor]  hover:bg-blue-700 text-white p-2 rounded-full flex items-center justify-center"
                        >
                            <AiOutlineSend />
                        </button>
                    </form>
                </motion.div>
            )}
            <button
                onClick={toggleChat}
                className=" bg-[--buttonsColor] text-white p-3 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                <AiOutlineMessage className="text-xl" />
            </button>
        </div>
    );
};

export default ChatComponent;
