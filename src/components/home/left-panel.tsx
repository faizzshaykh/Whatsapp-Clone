import { ListFilter, LogOut, MessageSquareDiff, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import { conversations } from "@/dummy-data/db";
import Conversation from "./conversation";

const LeftPanel = () => {
	return (
		<div className="h-full w-[380px] min-w-[380px] max-w-[380px] bg-left-panel flex flex-col border-r border-gray-300 dark:border-gray-600">
			{/* Header */}
			<div className="sticky top-0 bg-left-panel z-10">
				<div className="flex justify-between p-3 items-center border-b border-gray-300 dark:border-gray-600">
					<User size={24} className="text-gray-500" />
					<div className="flex items-center gap-3">
						<MessageSquareDiff size={20} className="text-gray-500" />
						<ThemeSwitch />
						<LogOut size={20} className="cursor-pointer text-gray-500" />
					</div>
				</div>

				{/* Search */}
				<div className="p-3 flex items-center gap-2">
					<div className="relative h-10 flex-1">
						<Search
							className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
							size={18}
						/>
						<Input
							type="text"
							placeholder="Search or start a new chat"
							className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent"
						/>
					</div>
					<ListFilter className="cursor-pointer text-gray-500" />
				</div>
			</div>

			{/* Chat List */}
			<div className="flex-1 overflow-auto">
				{conversations?.map((conversation) => (
					<Conversation key={conversation._id} conversation={conversation} />
				))}

				{conversations?.length === 0 && (
					<div className="p-6 text-center text-gray-500 text-sm">
						<p>No conversations yet</p>
						<p className="mt-2">
							We understand you're an introvert, but you've got to start somewhere 😊
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default LeftPanel;
