"use strict";

class crudoperationsInstallation {
    async onInstall(Mantra) {
        await Mantra.InstallSchema( "crudoperations" );
    }

    async onUninstall(Mantra) {
        await Mantra.UninstallSchema( "crudoperations" );
    }
}

module.exports = () => {
    return {
        Install: new crudoperationsInstallation()
    };
}