import { Editor } from './components/editor';
import { Toolbar } from './components/toolbar';

const DocumentIdPage = () => {
    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <div className='print:hidden min-w-screen mt-4'>
                <div className='flex justify-center'>
                    <Toolbar />
                </div>
            </div>
            <Editor />
        </div>
    );
}

export default DocumentIdPage; 