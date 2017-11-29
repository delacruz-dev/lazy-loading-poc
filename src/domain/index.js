const domain = {
    print: async () => {
        const module = await import('./print');
        return module.default;
    }
};

export default domain;