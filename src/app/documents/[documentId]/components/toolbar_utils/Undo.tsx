import { useEditorStore } from '@/tiptap';
import { Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

const Undo = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().undo().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
            )}
        >
            <Undo2Icon className="size-4" />
        </button>
    )
};

export default Undo;
export { Undo };