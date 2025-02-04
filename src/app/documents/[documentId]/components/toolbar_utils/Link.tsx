import { useEditorStore } from '@/tiptap';
import { Link2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const Link = ()  => {
    const { editor } = useEditorStore();

    const [value, setValue] = useState("");
    
    const onChange = (href: string) => {
        editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    };

    return (
        <DropdownMenu onOpenChange={(open) => {
            if (open) {
                setValue(editor?.getAttributes("link").href || "");
            }
        }}>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
                >
                    <Link2Icon className="size-4" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='p-2.5 flex items-center gap-x-2'>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full h-7 px-2 border border-neutral-300 rounded-sm"
                    placeholder="Paste or type a link"
                />
                <button
                    onClick={() => onChange(value)}
                    className="h-7 px-2.5 bg-[#101010] hover:bg-[#202020] text-white rounded-sm"
                >
                    Apply
                </button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Link;
export { Link };