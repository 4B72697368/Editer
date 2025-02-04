import { useEditorStore } from '@/tiptap';
import { ListIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BulletList = () => {
    const { editor } = useEditorStore();

    return (
        <button
            key={"Bullet List"}
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.isActive("bulletList") && "bg-neutral-200/80",
            )}
        >
            <ListIcon className='size-4' />
        </button>
    )
};

export default BulletList;
export { BulletList };