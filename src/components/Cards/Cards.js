import React from 'react'
import PropTypes from 'prop-types'

import BasicCard from './BasicCard'

import { colorSchemes } from '../../constants'

const Cards = props => {

    const { className, stackState } = props

    return (
        <div className={`d-flex flex-wrap ${className}`}>
            {colorSchemes.map((scheme, i) => (
                <BasicCard
                    bg={scheme.bg}
                    index={i}
                    key={'card' + i}
                    stackState={stackState}
                />))}
        </div>
    )
}

Cards.propTypes = {
    className: PropTypes.string,
    stackState: PropTypes.object
}

export default Cards


