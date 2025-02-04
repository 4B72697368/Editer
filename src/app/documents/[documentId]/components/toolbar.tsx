"use client"

import { Separator } from '@/components/ui/separator';
import { Align, 
        Bold, 
        BulletList, 
        Checklist, 
        FontFamily, 
        FontSize, 
        Heading, 
        HighlightColor, 
        Image as ImageImport, 
        Italic, 
        LineHeight, 
        Link, 
        OrderedList,
        Redo, 
        RemoveFormatting,
        Strikethrough, 
        TextColor, 
        Underline, 
        Undo 
} from './toolbar_utils';

export const Toolbar = () => {
    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 w-fit rounded-[24px] min-h-[40px] flex items-center justify-center gap-x-0.5 overflow-x-auto">
            <Bold />
            <Italic />
            <Underline />
            <Strikethrough />
            <TextColor />
            <HighlightColor />

            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <FontFamily />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <Heading />

            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <FontSize />

            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <Align />
            <LineHeight />
            <Checklist />
            <BulletList />
            <OrderedList />
            <Link />
            <ImageImport />
            <RemoveFormatting />

            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <Undo />
            <Redo />
        </div>
    );
}