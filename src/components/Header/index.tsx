import { useState } from "react";
import { Container, InputSpan } from "./style";
import axios from "axios";
import { useDataContext } from "../../provider/dataProvider";

export function Header() {

    const [uploadFile, setUploadFile] = useState<File | null>()
    const { setTable } = useDataContext()

    async function sendFile() {
        if (uploadFile) {
            try{
                const resp = await axios.request({
                    method: 'post',
                    baseURL: 'http://localhost:3333/table',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: { table: uploadFile }
                })
                console.log(resp)
                setTable(resp?.data['PRODUTOS VAREJO'])
            } catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <Container>
            <div>
                <h1>Spending&<span>control</span></h1>
            </div>
            <div>
                <InputSpan uploadFile={uploadFile}>
                    <label htmlFor="upload">{uploadFile ? uploadFile.name : 'Select CSV'}</label>
                    <input
                        type="file"
                        id="upload"
                        accept=".xlsx"
                        onChange={(e) => setUploadFile(e.target.files && e.target.files[0])}
                    />
                </InputSpan>
                <button onClick={sendFile} disabled={uploadFile === null}> Import table</button>
            </div>
        </Container>
    )
}