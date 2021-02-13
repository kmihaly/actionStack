import { useEffect, useState} from 'react'

const useActionPanel = (props) => {

    const {
        onAction,
        stackState
    } = props

    const [dev, setDev] = useState(stackState.dev)
    const [qa, setQa] = useState(stackState.qa)
    const [prod, setProd] = useState(stackState.prod)

    const checkChanges = () => {
        const changes = {}
        if(dev !== stackState.dev) changes.dev = dev
        if(qa !== stackState.qa) changes.qa = qa
        if(prod !== stackState.prod) changes.prod = prod
        return changes
    }

    const handleDo = () => {
        const changes = checkChanges()
        onAction(changes)
    }

    useEffect(() => {
        setDev(stackState.dev)
        setQa(stackState.qa)
        setProd(stackState.prod)
    }, [stackState])

    return ({
  dev,
        handleDo,
        prod,
        qa,
        setDev,
        setProd,
        setQa    
    })
}

export default useActionPanel
