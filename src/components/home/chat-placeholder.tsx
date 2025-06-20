"use client";

import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const ChatPlaceHolder = () => {
	const { resolvedTheme } = useTheme();

	if (!resolvedTheme) return null; // Prevent hydration mismatch

	return (
		<div className="w-full h-full bg-gray-secondary dark:bg-gray-primary flex flex-col items-center justify-center relative">
			<div className="flex flex-col items-center text-center gap-4 max-w-md px-2 sm:px-4">
				<Image src="/desktop-hero.png" alt="Hero" width={320} height={188} />
				<p className="text-2xl lg:text-3xl font-light mt-5 mb-2">
					Download WhatsApp for Windows
				</p>
				<p className="text-sm text-muted-foreground">
					Make calls, share your screen and get a faster experience when you download the Windows app.
				</p>

				<Button className="rounded-full my-5 bg-blue-600 hover:bg-blue-700 text-white">
					Get from Microsoft Store
				</Button>
			</div>

			<p className="absolute bottom-5 text-xs text-muted-foreground flex items-center gap-1">
				<Lock size={10} /> Your personal messages are end-to-end encrypted
			</p>
		</div>
	);
};

export default ChatPlaceHolder;
