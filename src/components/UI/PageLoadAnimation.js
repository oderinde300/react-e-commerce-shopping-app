export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
};

export const containerVariants2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5 }
    },
    exit: {
        x: '-100vh',
        transition: { ease: 'easeInOut' }
    }
};