function getDeviceType() {
    const width = window.screen.width;
    if (width >= 1024) return 'desktop';
    if (width >= 768) return 'tablet';
    return 'mobile';
}

export { getDeviceType }