import { useEditorStore, type Level } from '@/tiptap';
import { ChevronDownIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from "@/lib/utils";

const Heading = () => {
    const { editor } = useEditorStore();

    const headings = [
        { label: "Title", value: 1, fontSize: "32" },
        { label: "Subtitle", value: 2, fontSize: "24" },
        { label: "Heading 1", value: 3, fontSize: "20" },
        { label: "Heading 2", value: 4, fontSize: "18" },
        { label: "Heading 3", value: 5, fontSize: "16" },
        { label: "Normal Text", value: 0, fontSize: "16" },
    ]

    const getCurrentHeading = () => {
        for (let level = 1; level < 6; level++) {
            if (editor?.isActive(`heading`, { level })) {
                return headings[level-1].label;
            }
        }

        return headings[5].label;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
                >
                    <span className="truncate">
                        {getCurrentHeading()}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='p-1 py-4 flex flex-col gap-y-1 items-center'>
                {headings.map(({ label, value, fontSize }) => (
                    <div key={value}>
                        <button
                            onClick={() => {
                                editor?.chain().focus().setFontSize(`${fontSize}pt`).run();
                                if (value === 0) {
                                    editor?.chain().focus().setParagraph().run();
                                } else {
                                    editor?.chain().focus().setHeading({ level: value as Level }).run();
                                }
                            }}
                            className={cn(
                                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                                (value === 0 && editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) && "bg-neutral-200/80",
                            )}
                            style={{ fontSize }}
                        >
                            {label}
                        </button>
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default Heading;
export { Heading };