import { useState } from "react";
import { Container, InputSpan } from "./style";

export function Header() {

    const [uploadFile, setUploadFile] = useState<File | null>(null)

    function ExcelToB64() {
        if(uploadFile) {
            let data
            const reader = new FileReader();
            reader.readAsDataURL(uploadFile);
            reader.onload = (event) => {
                data = event.target?.result
                const base64Code = JSON.stringify(data).split(',')
                return b64ToCsv(base64Code[1])
            }
        }
    }

    function b64ToCsv(b64File: string) {
        console.log(b64File)
    }

    return(
        <Container>
            <div>
                <h1>Spending control</h1>
            </div>
            <div>
                <InputSpan uploadFile={uploadFile}>
                    <label htmlFor="upload">{uploadFile ? uploadFile.name : 'Select CSV'}</label>
                    <input 
                        type="file" 
                        id="upload"
                        accept=".xlsx"
                        onChange={(e) => setUploadFile(e.target.files&& e.target.files[0])}
                    />
                </InputSpan>
                <button onClick={ExcelToB64} disabled={uploadFile === null}> Import table</button>
            </div>
        </Container>
    )
}