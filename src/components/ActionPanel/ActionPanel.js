import React, { useContext } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import Select from 'react-select'

import { AppContext } from '../../App'

import createOptions from '../../functions/createOptions'
import useActionPanel from './useActionPanel'

const devOptions = createOptions("dev")
const qaOptions = createOptions("qa")
const prodOptions = createOptions("prod")

const ActionPanel = () => {

    const stackContext = useContext(AppContext)

    const {
        isRedoAvailable,
		isUndoAvailable,
        onAction,
        onUndo,
        onRedo,
        stackState
    } = stackContext

    const {
        dev,
        handleDo,
        prod,
        qa,
        setDev,
        setProd,
        setQa     
    } = useActionPanel({onAction, stackState})

    return (
        <Navbar bg="dark" variant="dark" className="pt-0">
            <Button 
                disabled={!isUndoAvailable} 
                variant="warning" 
                onClick={() => onUndo()}
                className="mt-2"
            >
                Undo
            </Button>
            <div className="mx-2 px-2 border-left border-right border-light d-flex flex-wrap">
                <Select
                    className="mt-2 mr-2 select--width"
                    onChange={obj => { setDev(obj.value) }}
                    value={{ value: dev, label: `dev: ${dev}` }}
                    options={devOptions}
                />
                <Select
                    className="mt-2 mr-2 select--width"
                    onChange={obj => { setQa(obj.value) }}
                    value={{ value: qa, label: `qa: ${qa}` }}
                    options={qaOptions}
                />
                <Select
                    className="mt-2 mr-2 select--width"
                    onChange={obj => { setProd(obj.value) }}
                    value={{ value: prod, label: `prod: ${prod}` }}
                    options={prodOptions}
                />
                <Button variant="secondary" className="mt-2" onClick={() => handleDo()}>Do</Button>
            </div>
            <Button disabled={!isRedoAvailable} className="mt-2" variant="success" onClick={() => onRedo()}>Redo</Button>
        </Navbar>
    )
}

export default ActionPanel
