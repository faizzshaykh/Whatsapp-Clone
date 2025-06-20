import { Laugh, Mic, Plus, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const MessageInput = () => {
	const [msgText, setMsgText] = useState("");

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		if (!msgText.trim()) return;
		console.log("Send:", msgText);
		setMsgText("");
	};

	return (
		<div className="bg-gray-primary px-3 py-1">
			<form
				onSubmit={handleSend}
				className="w-full flex items-center bg-[#f0f0f0] dark:bg-[#2a2f32] border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1.5"
			>
				{/* Left Icons */}
				<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mr-2">
					<Laugh className="cursor-pointer" size={18} />
					<Plus className="cursor-pointer" size={18} />
				</div>

				{/* Input Field */}
				<input
					type="text"
					placeholder="Type a message"
					className="flex-1 text-sm bg-transparent outline-none text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
					value={msgText}
					onChange={(e) => setMsgText(e.target.value)}
				/>

				{/* Right Icon */}
				<Button
					type="submit"
					size="icon"
					variant="ghost"
					className="ml-2 text-gray-700 dark:text-gray-300 hover:bg-transparent p-1"
				>
					{msgText.length > 0 ? <Send size={18} /> : <Mic size={18} />}
				</Button>
			</form>
		</div>
	);
};

export default MessageInput;
