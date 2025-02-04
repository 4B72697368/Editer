import { useEditorStore } from '@/tiptap';
import { ListTodoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Checklist = () => {
    const { editor } = useEditorStore();

    return (
        <button
            onClick={() => editor?.chain().focus().toggleTaskList().run()}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("taskList") && "bg-neutral-200/80",
            )}
        >
            <ListTodoIcon className="size-4" />
        </button>
    )
};

export default Checklist;
export { Checklist };