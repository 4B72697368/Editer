import { useEditorStore } from '@/tiptap';
import { ItalicIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Italic = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("italic") && "bg-neutral-200/80",
            )}
        >
            <ItalicIcon className="size-4" />
        </button>
    )
};

export default Italic;
export { Italic };