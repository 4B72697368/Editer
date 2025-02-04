import { useEditorStore } from '@/tiptap';
import { Redo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

const Redo = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().redo().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
            )}
        >
            <Redo2Icon className="size-4" />
        </button>
    )
};

export default Redo;
export { Redo };