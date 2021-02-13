import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../App'

const withStackContext = Component => {
//The use of this HOC is obsolete in this case, since useContext can repalce it in every functional component (see BasicCard)

    return () => {
        const stackContext = useContext(AppContext)

        return (
            <Component {...stackContext} />
        )
    }
}

withStackContext.propTypes = {
    Component: PropTypes.element
}

export default withStackContext
