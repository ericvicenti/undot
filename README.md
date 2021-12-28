# undot

Quick hack to hide the full screen microphone dot on macOS 12.

Usable as a plain binary, or with a nodejs installation to help run in the background.

## Usage

To build:

```sh
git clone https://github.com/s4y/undot
cd undot
make
```

To run once:

```sh
./undot
```

The first time you run it, you might need to allow accessibility API access in System Preferences. Do this. You can ignore the message asking you to restart your terminal.

To run repeatedly via node:

```sh
node undot.js
```

To set up pm2 and run in the background:

```sh
npm install -g pm2
pm2 startup # to launch pm2 on reboot. Follow the instructions 
pm2 start undot.js
pm2 save
```