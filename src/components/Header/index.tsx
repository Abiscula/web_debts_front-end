import { useState } from "react";
import { Container, InputSpan } from "./style";

export function Header() {

    const [uploadFile, setUploadFile] = useState<FileList | null>(null)

    function handleCsvFile() {
        if(uploadFile){
            console.log('teste')
        }
    }

    return(
        <Container>
            <div>
                <h1>Spending control</h1>
            </div>
            <div>
                <InputSpan uploadFile={uploadFile}>
                    <label htmlFor="upload">{uploadFile ? uploadFile[0].name : 'Select CSV'}</label>
                    <input 
                        type="file" 
                        id="upload"
                        onChange={(e) => setUploadFile(e.target.files)}
                    />
                </InputSpan>
                <button onClick={handleCsvFile} disabled={uploadFile === null}> Import table</button>
            </div>
        </Container>
    )
}