import * as fs from "node:fs";
import * as path from "node:path";

export class Logger {
    static log(text: string, logFile: string) {
        const logsDir = path.join(process.cwd(), '..', 'logs');
        const dateStr = new Date().toISOString().split('T')[0];

        const filePath = path.join(logsDir, `${logFile}_${dateStr}.log`);

        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }

        fs.writeFileSync(filePath, text);
    }
}