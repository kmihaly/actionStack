const createOptions = keyName => {
    return ([
        {
            label: `${keyName}: true`,
            value: "true" 
        },
        {
            label: `${keyName}: false`,
            value: "false"
        }     
    ])
}

export default createOptions