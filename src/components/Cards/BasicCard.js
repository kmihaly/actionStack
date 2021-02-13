import React from 'react' // , { useContext }
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'

//import { AppContext } from '../../App'

const BasicCard = props => {

    const { bg, index, stackState } = props

    //const stackContext = useContext(AppContext)

    return (
        <div className="p-3 card--width">
            <Card
                bg={bg}
            >
                <Card.Body>
                    <Card.Title>{`Component ${index + 1}`}</Card.Title>
                    <Card.Text>
                        {JSON.stringify(stackState, null, 4)} {/* stackContext.stackState*/}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

BasicCard.propTypes = {
    bg: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    stackState: PropTypes.object
}

export default BasicCard
