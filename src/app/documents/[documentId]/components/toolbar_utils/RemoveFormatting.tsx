import { useEditorStore } from '@/tiptap';
import { RemoveFormattingIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const RemoveFormatting = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
            )}
        >
            <RemoveFormattingIcon className="size-4" />
        </button>
    )
};

export default RemoveFormatting;
export { RemoveFormatting };