const console =  async () => {
    const module = await import('./useCases/console');
    return module.default();
};

export {
    console
};