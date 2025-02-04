import { useEditorStore } from '@/tiptap';
import { UnderlineIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Underline = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("underline") && "bg-neutral-200/80",
            )}
        >
            <UnderlineIcon className="size-4" />
        </button>
    )
};

export default Underline;
export { Underline };