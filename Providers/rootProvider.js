import React from 'react';

const RootProvider = ({children}) => {
    return(
        <>
            <ThemeLayout>
                {children}
            </ThemeLayout>
        </>
    )
}

export default RootProvider;