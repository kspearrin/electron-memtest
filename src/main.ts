import {
    app,
    BrowserWindow,
} from 'electron';

import * as path from 'path';
import * as url from 'url';

export class Main {
    win: BrowserWindow;

    constructor() {
        const args = process.argv.slice(1);
        const watch = args.some((val) => val === '--watch');

        if (watch) {
            // tslint:disable-next-line
            require('electron-reload')(__dirname, {});
        }
    }

    bootstrap() {
        app.on('ready', async () => {
            this.win = new BrowserWindow({
                width: 800,
                height: 600,
                minWidth: 680,
                minHeight: 500,
                title: 'Mem Test',
            });

            this.win.loadURL(url.format({
                protocol: 'file:',
                pathname: path.join(__dirname, '/index.html'),
                slashes: true,
            }));
        });

        app.on('window-all-closed', () => {
            app.quit();
        });
    }
}

const main = new Main();
main.bootstrap();
