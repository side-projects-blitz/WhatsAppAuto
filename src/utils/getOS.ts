import os from 'os';

const platform = os.platform();

export const isWindows = platform === 'win32';
export const isLinux = platform === 'linux';
export const isMac = platform === 'darwin';
