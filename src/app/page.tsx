"use client";

import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";

export default function Home() {
	return (
		<main className="h-screen w-screen overflow-hidden">
			{/* Green top banner */}
			<div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-10" />

			{/* Main Layout */}
			<div className="flex h-full w-full max-w-[1400px] mx-auto bg-left-panel rounded shadow overflow-hidden">
				
				{/* Left Panel */}
				<div className="w-[380px] min-w-[380px] max-w-[380px]">
					<LeftPanel />
				</div>

				{/* Divider */}
				<div className="w-px bg-gray-300 dark:bg-gray-700" />

				{/* Right Panel */}
				<div className="flex-1">
					<RightPanel />
				</div>
			</div>
		</main>
	);
}
