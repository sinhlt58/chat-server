import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  MessageModel,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { getOpenAIResponse } from "./services/chat.service";

export const Chat = () => {
  const [messages, setMessages] = useState<MessageModel[]>([]);

  const handleSend = async (text: string) => {
    try {
      if (!text) return;
      const newMessages: MessageModel[] = [
        {
          message: text,
          sentTime: "just now",
          sender: "Me",
          direction: "outgoing",
          position: "normal",
        },
      ];
      setMessages([...messages, ...newMessages]);
      const res = await getOpenAIResponse(text);
      newMessages.push({
        message: res.data.text.trim(),
        sentTime: "just now",
        sender: "ChatGPT",
        direction: "incoming",
        position: "normal",
      });

      setMessages([...messages, ...newMessages]);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div
      className="gap-4 flex flex-col justify-between"
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <h2 className="font-bold">Chat GPT demo</h2>
      <div className="relative h-full">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message) => {
                return <Message key={message.message} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={(html, text) => handleSend(text)}
              attachDisabled
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};
