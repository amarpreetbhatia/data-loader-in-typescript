import fs from 'fs'
import { OutputTarget } from "../summary";

export class HtmlReport implements OutputTarget{
    print(report: string):void{
        const html =`<div>
            <h1>Analyse Output</h1>
                {report}
        </div>`

        fs.writeFileSync('report.html',html);
    }
}