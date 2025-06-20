import { messages } from "@/dummy-data/db";
import ChatBubble from "./chat-bubble";

const MessageContainer = () => {
	return (
		<div className='relative p-3 flex-1 overflow-auto h-full bg-chat-tile-light dark:bg-chat-tile-dark'>
			<div className='px-2 flex flex-col gap-3 h-full'> {/* ✅ fixed spacing */}
				{messages?.map((msg, idx) => (
					<div key={msg._id}>
						<ChatBubble />
					</div>
				))}
			</div>
		</div>
	);
};

export default MessageContainer;
