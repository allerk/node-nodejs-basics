import { access } from "node:fs/promises";

const ifExists = async (name) => {
    try {
        await access(name);
        return true;
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
    }
}

export default ifExists ;
