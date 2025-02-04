'use client'

import { 
    TextStyle,
    Bold,
    Italic,
    Underline,
    Strike,
    Link,
    Code,
    CodeBlock,
    Blockquote,
    Image,
    ImageResize,
    FontFamily,
    FontSizeExtension,
    Placeholder,
    Document,
    Paragraph,
    IndentExtension,
    Text,
    HorizontalRule,
    HardBreak,
    Heading,
    Color,
    Highlight,
    BulletList,
    ListItem,
    OrderedList,
    TaskList,
    TaskItem,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    LineHeightExtension,
    TextAlign,
    Dropcursor,
    Gapcursor,
    History,
    CharacterCount,
    useEditor,
    EditorContent,
    useEditorStore
} from '@/tiptap'

export const Editor = () => {
    const { setEditor } = useEditorStore();

    const editor = useEditor({
        onCreate({ editor }) {
            setEditor(editor);
        },
        onDestroy() {
            setEditor(null);
        },
        onUpdate({ editor }) {
            setEditor(editor);
        },
        onSelectionUpdate({ editor }) {
            setEditor(editor);
        },
        onTransaction({ editor }) {
            setEditor(editor);
        },
        onFocus({ editor }) {
            setEditor(editor);
        },
        onBlur({ editor }) {
            setEditor(editor);
        },
        onContentError({ editor }) {
            setEditor(editor);
        },
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 56px;",
                class: 'focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
            },
        },
        extensions: [
            TextStyle,
            Bold,
            Italic,
            Underline,
            Strike,
            Link.configure({ openOnClick: true, autolink: true, defaultProtocol: 'https' }),
            Code,
            CodeBlock,
            Blockquote,
            Image,
            ImageResize,
            FontFamily,
            FontSizeExtension,
            Placeholder.configure({ placeholder: 'Paste or compose card...' }),
            Document,
            Paragraph,
            IndentExtension.configure({ types: ['listItem', 'paragraph'], minLevel: 0, maxLevel: 8 }),
            Text,
            HorizontalRule,
            HardBreak,
            Heading,
            Color,
            Highlight.configure({ multicolor: true }),
            BulletList,
            ListItem,
            OrderedList,
            TaskList,
            TaskItem.configure({ nested: true, }),   
            Table.configure({ resizable: true }),
            TableCell,
            TableHeader,
            TableRow,
            LineHeightExtension.configure({ types: ['heading', 'paragraph'], defaultLineHeight: "normal" }),
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Dropcursor,
            Gapcursor,
            History,
            CharacterCount,
        ]
    })

    return (
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
            <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}