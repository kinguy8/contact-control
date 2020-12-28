import React, { useEffect } from 'react'

const Alert = ({ state, clearAlert }) => {
    const styles = {
        alert: {
            display: state.visibility,
        }
    }

    useEffect(() => {
        setTimeout(() => {
            clearAlert()
        }, 3000)
    },[state.visibility])


    return (
        <React.Fragment>
            <div className={state.alertStyle} style={styles.alert} role="alert">
                {state.msg}
            </div> 
        </React.Fragment>
    )
}

export default Alert