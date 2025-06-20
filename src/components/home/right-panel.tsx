"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, X } from "lucide-react";
import MessageInput from "./message-input";
import MessageContainer from "./message-container";
import ChatPlaceHolder from "@/components/home/chat-placeholder";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GroupMembersDialog from "./group-members-dialog";

const RightPanel = () => {
	const selectedConversation = true; // Set to true for actual chat view
	const conversationName = "John Doe";
	const isGroup=true;

	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent theme mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	if (!selectedConversation) {
		return (
			<div className="w-full h-full flex items-center justify-center bg-gray-secondary dark:bg-gray-primary">
				<ChatPlaceHolder />
			</div>
		);
	}

	const bgImage =
		resolvedTheme === "dark"
			? "url('/bg-dark.png')"
			: "url('/bg-light.png')";

	return (
		<div
			className="w-full h-full flex flex-col"
			style={{
				backgroundImage: bgImage,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
		{/* Header */}
<div
	className="w-full h-14 flex items-center justify-between px-4 border-b border-[#ddd] dark:border-[#2a2e30]"
	style={{
		backgroundColor: resolvedTheme === "dark" ? "#202c33" : "#f0f2f5",
	}}
>
	{/* Left: Avatar + Name */}
	<div className="flex items-center gap-3">
		<Avatar className="w-9 h-9">
			<AvatarImage src={"/placeholder.png"} className="object-cover" />
			<AvatarFallback>
				<div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full" />
			</AvatarFallback>
		</Avatar>
		<p className="text-sm font-medium text-black dark:text-white">
			{conversationName}
		</p>
		{isGroup && <GroupMembersDialog/>}
	</div>

	{/* Right: Icons */}
	<div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
		<a href="/video-call" target="_blank">
			<Video size={20} className="cursor-pointer" />
		</a>
		<X size={18} className="cursor-pointer" />
	</div>
</div>



			{/* Messages */}
			<div className="flex-1 overflow-y-auto px-4 py-2">
				<MessageContainer />
			</div>

			{/* Input */}
			<div className="p-2 bg-gray-primary border-t dark:border-gray-700 border-gray-300">
				<MessageInput />
			</div>
		</div>
	);
};

export default RightPanel;
