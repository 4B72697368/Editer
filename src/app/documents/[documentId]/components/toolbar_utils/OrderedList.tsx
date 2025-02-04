import { useEditorStore } from '@/tiptap';
import { ListOrderedIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const OrderedList = () => {
    const { editor } = useEditorStore();

    return (
        <button
            key={"Ordered List"}
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("orderedList") && "bg-neutral-200/80",
            )}
        >
            <ListOrderedIcon className='size-4' />
        </button>
    )
};

export default OrderedList;
export { OrderedList };