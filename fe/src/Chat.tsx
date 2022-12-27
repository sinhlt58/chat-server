import { ChatContainer, MainContainer, Message, MessageInput, MessageList, MessageModel } from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { getOpenAIResponse } from "./services/chat.service";


export const Chat = () => {
  const [currentText, setCurrentText] = useState("");

  const [messages, setMessages] = useState<MessageModel[]>([]);

  const handleKeyDown = async (e: any) => {
    try {
      if (e.key === "Enter") {
        if (!currentText) return;
        setCurrentText("");
        const newMessages: MessageModel[] = [
          {
            message: currentText,
            sentTime: "just now",
            sender: "Me",
            direction: "outgoing",
            position: "normal"
          }
        ];
        const res = await getOpenAIResponse(currentText);
        newMessages.push({
          message: res.data.text,
          sentTime: "just now",
          sender: "ChatGPT",
          direction: "incoming",
          position: "normal"
        });

        setMessages([...messages, ...newMessages]);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className="p-4 gap-4" style={{
      height: 'calc(100vh - 20px)'
    }}>
      <div className="relative h-full">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {
                messages.map(message => {
                  return (
                    <Message
                      key={message.message}
                      model={message}
                    />
                  )
                })
              }
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              value={currentText}
              onChange={(html, text) => setCurrentText(text)}
              onKeyDown={handleKeyDown}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}
