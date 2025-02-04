import { useEditorStore } from '@/tiptap';
import { StrikethroughIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Strikethrough = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("strike") && "bg-neutral-200/80",
            )}
        >
            <StrikethroughIcon className="size-4" />
        </button>
    )
};

export default Strikethrough;
export { Strikethrough };