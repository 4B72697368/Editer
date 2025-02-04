import { useEditorStore } from '@/tiptap';
import { BoldIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Bold = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("bold") && "bg-neutral-200/80",
            )}
        >
            <BoldIcon className="size-4" />
        </button>
    )
};

export default Bold;
export { Bold };