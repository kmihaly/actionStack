import { useRef, useState } from 'react'

const useActionStack = initialState => {

	const [stackState, setStackState] = useState(initialState)
	const [isRedoAvailable, setIsRedoAvailable] = useState(false)
	const [isUndoAvailable, setIsUndoAvailable] = useState(false)
	const currentActionRef = useRef(0)
	const actionStack = useRef([initialState])

	const onUpdate = newObj => {
		setStackState(obj => ({ ...obj, ...newObj }))
	}

	const onAction = newObj => {
		actionStack.current.push(newObj)
		currentActionRef.current++
		setIsUndoAvailable(true)
		setIsRedoAvailable(false)
		onUpdate(newObj)
	}

	const onUndo = () => {
		if (isUndoAvailable) { //This condition is obsolete because of the disabled button
			const lastActionOrdinalNumber = currentActionRef.current// - 1
			const lastAction = actionStack.current[lastActionOrdinalNumber]
			const undoAction = {}
			for (const [key, value] of Object.entries(lastAction)) {
				let newValue = "true"
				if(value === "true") {
					newValue = "false"
				}
				undoAction[key] = newValue
			}
			onUpdate(undoAction)
			currentActionRef.current--

			if (currentActionRef.current === 0) {
				setIsUndoAvailable(false)
			}
			setIsRedoAvailable(true)
		}

	}

	const onRedo = () => {
		if (isRedoAvailable) {  //This condition is obsolete because of the disabled button
			const nextActionOrdinalNumber = currentActionRef.current + 1
			if (actionStack.current[nextActionOrdinalNumber]) {
				const nextAction = actionStack.current[nextActionOrdinalNumber]
				onUpdate(nextAction)
				currentActionRef.current++
				setIsUndoAvailable(true)
				if(!actionStack.current[nextActionOrdinalNumber + 1]) {
					setIsRedoAvailable(false)
				}
			}
		}
	}

	return {
		isRedoAvailable,
		isUndoAvailable,
		onAction,
		onUndo,
		onRedo,
		stackState
	}
}

export default useActionStack
